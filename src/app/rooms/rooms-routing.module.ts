import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { roomGuard } from './guards/room.guard';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild:[roomGuard],
    children: [
      { path: 'add', component: RoomsAddComponent },
      // { path: ':roomid', component: RoomsBookingComponent },
    ],
  },
  {
    path:'booking',
    component:BookingComponent
  }
];
//put add first than :roomid


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
