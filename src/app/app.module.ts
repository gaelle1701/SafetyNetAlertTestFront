import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonPageComponent } from './pages/person-page/person-page.component';
import { FirestationCardComponent } from './components/firestation-card/firestation-card.component';
import { FirestationPageComponent } from './pages/firestation-page/firestation-page.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
