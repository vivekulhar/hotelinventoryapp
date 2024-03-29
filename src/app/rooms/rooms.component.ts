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
import { Observable, Subscription, catchError, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import {of, Subject} from 'rxjs';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],

})
export class RoomsComponent
  implements OnDestroy,DoCheck, AfterViewChecked, AfterViewInit, OnDestroy, OnInit
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
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

  error:string='';
  totalBytes = 0;

  subscription!:Subscription;
// subject is base class for streams
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      //console.log(err);
      // dont write this in component
      this.error$.next(err.message);
      return of([]);
    })
  );

    priceFilter = new FormControl(0);

  //modify the same stream
  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) =>rooms.length)
  )

  //roomService= new RoomsService(); 
  
  // shouldn't inject a component
  // keep services private
  constructor(@SkipSelf() private roomsService:RoomsService,
  private configService:ConfigService) {

  }
  
  // ngOnDestroy(): void {
  //   console.log('on destroy is called');
  // }
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

    this.roomsService.getPhotos().subscribe((event)=>{
      switch(event.type){
        case HttpEventType.Sent:{
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader:{
          console.log('Request Success');
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes = event.loaded;
          break;
        }
        case HttpEventType.Response:{
          console.log(event.body);
        }
      }
    })


    // this.subscription = this.roomsService.getRooms$.subscribe(rooms=>{
    //   this.roomList=rooms;
    // });
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
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
// pull the data architecture
//getData ->addData ->getData

// rxjs -- pull the data architecture
//getData->continuous stream of data ->addData 
