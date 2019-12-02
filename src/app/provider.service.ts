import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  uri = 'http://localhost:63510/api/Capacity';

  constructor(private http: HttpClient) { }

  Get() {
    return this
           .http
           .get(`${this.uri}`);
  }
  Post(p) {
    console.log(p);

    this.http.post(`${this.uri}`, p)
        .subscribe(res => console.log('Done'));
  }
}
