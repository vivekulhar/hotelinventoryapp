import { Injectable, Inject } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { shareReplay } from 'rxjs';
// import {environment} from '../../../environments/environment'
//
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];
  // we cannot burden the api after we have sub
  //scribed to it, it can be modified inside a
  // function called pipe
  // $ denotes that this is a stream and you 
  // dont need to call ngoninit on it
  // headers = new HttpHeaders({
  //   'token':'12345rgdfgdstr43'
  // })
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').
  pipe(
    shareReplay(1)
  );
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    // console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint);
    console.log('Rooms service Initialised');
  }

  getRooms() {
    
    return this.http.get<RoomList[]>('/api/rooms',{
    });
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
