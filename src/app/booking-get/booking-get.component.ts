import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';
import Booking from '../Booking';

@Component({
  selector: 'app-booking-get',
  templateUrl: './booking-get.component.html',
  styleUrls: ['./booking-get.component.css']
})
export class BookingGetComponent implements OnInit {
  bookings: Booking[];
  constructor(private bs: BookingService) { }

  ngOnInit() {
    this.bs.Get().subscribe((data: Booking[]) => {
      this.bookings = data;
    });
  }
  delete(id) {
    this.bs.delete(id).subscribe(res => {
      this.bookings.splice(id, 1);
      this.ngOnInit();
    });
   }
}
