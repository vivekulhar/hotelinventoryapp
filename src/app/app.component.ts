import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, Optional, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import {localStorageToken} from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationStart, Route, Router } from '@angular/router';
import { filter } from 'rxjs';
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
    this.loggerService?.log("AppComponent.ngOnInit()");
    // this.name.nativeElement.innerText = "Hilton Hotel";
    this.localStorage.setItem('name','Hiton Hotel');
    this.router.events.subscribe((event)=>{
      console.log(event);
    })
    //specific events
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart)
    ).subscribe((event)=>{
      console.log('Navigation Started');
    });
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart)
    ).subscribe((event)=>{
      console.log('Navigation Completed');
    });
  }

  constructor(@Optional() private loggerService:LoggerService,
  @Inject(localStorageToken) private localStorage:any,
  private initService:InitService,
  private configService:ConfigService,
  private router:Router){
    console.log(initService.config);
  }
}
