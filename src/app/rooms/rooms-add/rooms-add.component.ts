import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit{
  room:RoomList={
    roomType:'',
    amenities:'',
    checkinTime:new Date(),
    checkoutTime:new Date(),
    photos:'',
    price:0,
    rating:0,
  }
  successMessage:string= '';
  constructor(private roomsService:RoomsService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  AddRoom(){
    this.roomsService.addRoom(this.room).subscribe
    ((data)=>this.successMessage = "Room Added Successfully")
  }
}
