import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { FormsModule} from '@angular/forms';
import { ListingForComponent } from './listing-for/listing-for.component';
import { ListingFor2Component } from './listing-for2/listing-for2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ListingForComponent,
    ListingFor2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
