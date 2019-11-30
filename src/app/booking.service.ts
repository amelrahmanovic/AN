import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  uri = 'http://localhost:63510/api/Booking';

  constructor(private http: HttpClient) { }

  Get() {
    return this
           .http
           .get(`${this.uri}`);
  }
  delete(id) {
    console.log(id);
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
