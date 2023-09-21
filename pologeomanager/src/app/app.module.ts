import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleMapsModule } from '@angular/google-maps';

import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';

import { HomepageModule } from './homepage/homepage.module';
import { MapModule } from './main/map/map.module';
import { PlanModule } from './main/plan/plan.module';
import { SuggestModule } from './main/suggest/suggest.module';
import { ToolbarModule } from './toolbar/mainToolbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    GoogleMapsModule,

    HttpClientModule,

    MatSidenavModule,

    ToolbarModule,
    HomepageModule,
    MapModule,
    SuggestModule,
    PlanModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
