import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
// import {environment} from '../../../environments/environment'
// 
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList:RoomList[] = [
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
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    // console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint);
    console.log('Rooms service Initialised')
   }

  getRooms(){
    return this.roomList;
  }
}
