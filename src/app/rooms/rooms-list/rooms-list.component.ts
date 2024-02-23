import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
   changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy{
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // to get the data
  @Input() rooms:RoomList[] | null=[];

  @Input() price = 0;
  // <> kind of data we want to send back
  @Output() selectedRoom = new EventEmitter<RoomList>();
  @Input() title:string='';
  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }
}
