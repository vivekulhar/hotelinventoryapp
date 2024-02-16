import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements DoCheck, AfterViewChecked, AfterViewInit
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

  // we have created a new instance of HeaderComponent
  // and we can use it here
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}
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

    this.roomList = [
      {
        roomNumber: 1201,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 1501,
        roomType: 'Luxury Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 4.2,
      },
      {
        roomNumber: 2001,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1500,
        photos:
          'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 3.4546,
      },
    ];
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
      roomNumber: 4324,
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
    this.roomList = [...this.roomList, room];
  }
}
