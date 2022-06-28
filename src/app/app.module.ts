import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCardComponent } from './persons/person-card/person-card.component';
import { PersonPageComponent } from './persons/pages/page-list-persons/page-list-persons.component';
import { FirestationCardComponent } from './firestations/firestation-card/firestation-card.component';
import { FirestationPageComponent } from './pages/firestation-page/firestation-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomePageComponent } from './ui/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    PersonPageComponent,
    FirestationCardComponent,
    FirestationPageComponent,
    HeaderComponent,
    HomePageComponent
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
