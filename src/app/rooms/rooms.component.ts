import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],

})
export class RoomsComponent
  implements DoCheck, AfterViewChecked, AfterViewInit, OnDestroy, OnInit
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  title = 'Room List';
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  }
);
  // we have created a new instance of HeaderComponent
  // and we can use it here
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  //roomService= new RoomsService(); 
  
  // shouldn't inject a component
  // keep services private
  constructor(@SkipSelf() private roomsService:RoomsService) {

  }
  
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Rooms View';
  }
  ngAfterViewInit(): void {
    // this.headerComponent.title="Rooms View";
    console.log(this.headerChildrenComponent.last.title);
    this.headerChildrenComponent.last.title="Last Title";

    // this.headerChildrenComponent.get
  }

  ngDoCheck(): void {
    console.log('on check is called');
  }

  ngOnInit(): void {
    // console.log(this.headerComponent);

    this.roomsService.getRooms().subscribe(rooms=>{
      this.roomList=rooms;
    });
    this.stream.subscribe((data)=>
    {
      console.log(data);
    });
    this.stream.subscribe({
      next:(value)=>console.log(value),
      complete:()=>console.log('complete'),
      error:()=>console.log('error')
    })
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: '4324',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.5,
    };
    // this.roomList.push(room);

    // create a new instance here,
    // the property should be immutable
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList = data;
    });
  }

  editRoom(){
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.5,
    };

    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList = data;
    })
  };

  deleteRoom(){
    this.roomsService.delete('3').subscribe((data)=>{
      this.roomList=data;
    })
  }
}
// pull the data architecture
//getData ->addData ->getData

// rxjs -- pull the data architecture
//getData->continuous stream of data ->addData 
