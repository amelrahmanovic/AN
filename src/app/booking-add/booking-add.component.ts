import { Component, OnInit } from '@angular/core';
import Booking from '../Booking';
import Provider from '../Provider';
import { BookingService } from '../booking.service';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {
  providers: Provider[];
  bookings: Array<Booking> = new Array<Booking>();
  book: Booking;
  constructor(private bs: BookingService, private ps: ProviderService) {}

  // tslint:disable-next-line: variable-name
  add(capacity_provider_id, Object, From, To, is_active, amount, currency, comment) {

    // tslint:disable-next-line: prefer-const
    let x = new  Booking();
    x.id = 0;
    x.capacity_provider_id = capacity_provider_id;
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
      console.log(this.bookings[index]);
    }

    console.log(this.bookings.length);
  }

  ngOnInit() {
    this.ps.Get().subscribe((data: Provider[]) => {
      this.providers = data;
    });
  }
}
