import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingGetComponent } from './booking-get/booking-get.component';
import { BookingAddComponent } from './booking-add/booking-add.component';
import { HomeComponent } from './home/home.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderGetComponent } from './provider-get/provider-get.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingGetComponent,
    BookingAddComponent,
    HomeComponent,
    ProviderAddComponent,
    ProviderGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
