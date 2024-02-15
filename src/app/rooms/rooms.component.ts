import { Component } from '@angular/core';
import { Room } from './rooms';

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
    // totalRooms:20,
    // availableRooms:0,
    // bookedRooms:5
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
