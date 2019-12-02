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
  bookingsFromBD: Array<Booking> = new Array<Booking>();
  book: Booking;
  constructor(private bs: BookingService, private ps: ProviderService) {}

  // tslint:disable-next-line: variable-name
  add(capacity_provider_id, Object, From, To, is_active, amount, currency, comment) {

    // tslint:disable-next-line: prefer-const
    let x = new  Booking();
    x.id = 0;
    x.capacity_provider_id = Number(capacity_provider_id);
    x.object_name = Object;
    x.date_from = new Date(From);
    x.date_from.setDate( x.date_from.getDate() + 1 );

    x.date_to = new Date(To);
    x.date_to.setDate( x.date_to.getDate() + 1 );

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
  storeindatabase() {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.bookings.length; index++) {
      this.bookingsFromBD[0].id = 0;
      this.bookingsFromBD[0].object_name = this.bookings[index].object_name;
      this.bookingsFromBD[0].amount = 2.40;
      this.bookingsFromBD[0].currency = this.bookings[index].currency;
      this.bookingsFromBD[0].comment = this.bookings[index].comment;
      this.bookingsFromBD[0].is_active = this.bookings[index].is_active;
      this.bookingsFromBD[0].date_from = this.bookings[index].date_from;
      this.bookingsFromBD[0].date_to = this.bookings[index].date_to;
      this.bookingsFromBD[0].capacity_provider_id = this.bookings[index].capacity_provider_id;
      // tslint:disable-next-line: max-line-length
      // this.bs.Post(this.bookings[index]);
      this.bs.Post(this.bookingsFromBD[0]);
      // this.ps.Post(this.providers[0]); // working
    }
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.bookings.length; index++) {
      this.bookings.pop();
    }

  }

  ngOnInit() {
    this.ps.Get().subscribe((data: Provider[]) => { this.providers = data; });

    this.bs.Get().subscribe((data: Booking[]) => { this.bookingsFromBD = data; });
  }
}
