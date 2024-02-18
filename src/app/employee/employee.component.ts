import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

// providers: new instance for roomsservice
@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent {
  empName:string='John';

  constructor(@Self() private roomsService: RoomsService){

  }
}
