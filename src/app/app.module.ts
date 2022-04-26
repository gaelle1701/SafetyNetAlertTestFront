import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonPageComponent } from './person-page/person-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    PersonPageComponent
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
