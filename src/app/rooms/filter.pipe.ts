import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomList[] | null, price: number): RoomList[] {
    if(rooms){
      return rooms.filter((room)=> room.price > price);
    }else{
      return []
    }
    
  }

}
