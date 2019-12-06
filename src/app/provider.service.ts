import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  uri = 'http://localhost:63510/api/Capacity';
  headers = new HttpHeaders();
  v = '1.0';

  constructor(private http: HttpClient) { }

  Get() {
    let headers = new HttpHeaders();
    headers = headers.set('api-version', '1.0');

    return this.http.get(`${this.uri}`, {headers: {'api-version' : this.v}});
  }
  Post(p) {
    console.log(p);
    this.http.post(`${this.uri}`, p, {headers: {'api-version' : this.v}}).subscribe(res => console.log('Added Done'));
  }
  Delete(id) {
    console.log('Deleted Done');
    return this.http.delete(`${this.uri}/${id}`, {headers: {'api-version' : this.v}});
  }
}
