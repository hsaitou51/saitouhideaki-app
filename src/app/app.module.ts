import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { PuroductListingComponent } from './puroduct-listing/puroduct-listing.component';
import { PuroductDetailComponent } from './puroduct-detail/puroduct-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PuroductListingComponent,
    PuroductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
