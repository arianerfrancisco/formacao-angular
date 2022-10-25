import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';
import { DataBidingComponent } from './data-biding/data-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
