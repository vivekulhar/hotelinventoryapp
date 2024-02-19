import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit{
  id:number=0;
  // id$ = this.router.params.pipe(
  //   map(params=>params['roomid'])
  // );

  id$ = this.router.paramMap.pipe(map((params)=>
    params.get('roomid')
  ))
  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
    // in snapshot value is never updated
    // this.id = this.router.snapshot.params['roomid'];

    // this.id$ = this.router.params.pipe(
    //   map(params=>params['roomid'])
    // )

    // this.router.paramMap.subscribe((params)=>{
    //   params.get('roomid')
    // })
    //dont use subscribe cause memory leakage
    // this.router.params.subscribe((params)=>{ this.id=params['roomid']});
  }
}
