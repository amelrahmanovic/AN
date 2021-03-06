import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  uri = 'http://localhost:63510/api/Booking';
  headers = new HttpHeaders();
  v = '1.0';

  constructor(private http: HttpClient) { }

  Get() {
    return this.http.get(`${this.uri}`, {headers: {'api-version' : this.v}});
  }
  delete(id) {
    console.log(id);
    return this.http.delete(`${this.uri}/${id}`, {headers: {'api-version' : this.v}});
  }
   Post(booking) {
    console.log(booking);
    this.http.post(`${this.uri}`, booking, {headers: {'api-version' : this.v}}).subscribe(res => console.log('Done'));
  }
}
