import { Component, OnInit } from '@angular/core';
import Booking from '../Booking'

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {
  bookings: Array<Booking> = new Array<Booking>();
  book: Booking;
  constructor() { }

  add(id, capacity_provider_id, Object, From, To, is_active, amount, currency, comment) {

    let x = new  Booking();
    x.id = 1;
    x.capacity_provider_id = 1;
    x.object_name = Object;
    x.date_from = From;
    x.date_to = To;
    x.is_active = is_active;
    x.amount = amount;
    x.currency = currency;
    x.comment = comment;

    this.bookings.push(x);

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.bookings.length; index++) {
      console.log(this.bookings[index].comment);
    }
  }

  ngOnInit() {
  }
}
