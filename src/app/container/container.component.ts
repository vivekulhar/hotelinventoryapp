import { AfterContentInit, Component, ContentChild, Host, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  //providers:[RoomsService]
})
export class ContainerComponent implements AfterContentInit, OnInit{
  @ContentChild(EmployeeComponent) employee!:EmployeeComponent;
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick'
  }

  ngOnInit():void{

  }
  constructor(){

  }
}
