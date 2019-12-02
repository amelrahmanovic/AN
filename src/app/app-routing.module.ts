import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingGetComponent } from './booking-get/booking-get.component';
import { BookingAddComponent } from './booking-add/booking-add.component';
import { HomeComponent } from './home/home.component';

import { ProviderAddComponent } from './provider-add/provider-add.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bookings',
    component: BookingGetComponent
  },
  {
    path: 'booking/add',
    component: BookingAddComponent
  },
  {
    path: 'provider/add',
    component: ProviderAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
