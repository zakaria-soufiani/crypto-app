import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MdSidenavModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import { HttpModule } from '@angular/http';




import 'hammerjs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
