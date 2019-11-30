import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';
import {ProviderService} from '../provider.service';
import Booking from '../Booking';
import Provider from '../Provider';

@Component({
  selector: 'app-booking-get',
  templateUrl: './booking-get.component.html',
  styleUrls: ['./booking-get.component.css']
})
export class BookingGetComponent implements OnInit {
  bookings: Booking[];
  providers: Provider[];
  constructor(private bs: BookingService, private ps: ProviderService) { }

  ngOnInit() {
    this.bs.Get().subscribe((data: Booking[]) => {
      this.bookings = data;
    });
    this.ps.Get().subscribe((data: Provider[]) => {
      this.providers = data;
    });
  }

}
