import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Provider from '../Provider';
import { ProviderService } from '../provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent implements OnInit {
  provider: Provider = new Provider();
  constructor(private ps: ProviderService) {}
  add(Name, City, Phone, Email, Contact) {
    this.provider.id = 0;
    this.provider.name = Name;
    this.provider.city = City;
    this.provider.phone = Phone;
    this.provider.email = Email;
    this.provider.contract_number = Contact;
    this.ps.Post(this.provider);

    alert('New provider added in database');
  }
  ngOnInit() {}
}
