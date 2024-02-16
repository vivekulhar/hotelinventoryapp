import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template:'<h1>Hello World</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms=50;
  // }
  title = 'hotelinventoryapp';
  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;

  @ViewChild('name',{static:true}) name!:ElementRef;
  
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel"
  }
}
