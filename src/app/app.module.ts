import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Client1Component } from './client1/client1.component';
import { SelectorComponent } from './selector/selector.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Client2Component } from './client2/client2.component';

@NgModule({
  declarations: [
    AppComponent,
    Client1Component,
    SelectorComponent,
    Client2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
