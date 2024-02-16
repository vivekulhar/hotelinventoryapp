import { Component } from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  rooms:Room={
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }
  roomList:RoomList[]=[{
    roomNumber:1201,
    roomType : 'Deluxe Room',
    amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price:500,
    photos:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
    checkinTime:new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
    rating:4.5
  },
  {
    roomNumber:1501,
    roomType : 'Luxury Room',
    amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price:1000,
    photos:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
    checkinTime:new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
    rating:4.2
  },
  {
    roomNumber:2001,
    roomType : 'Private Suite',
    amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price:1500,
    photos:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
    checkinTime:new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
    rating:3.4546
  } 
]

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
