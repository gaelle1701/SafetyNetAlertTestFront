import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonCardComponent } from './person-card/person-card.component';
import { PageListPersonsComponent } from './pages/page-list-persons/page-list-persons.component';


@NgModule({
  declarations: [
    PersonCardComponent,
    PageListPersonsComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule
  ]
})
export class PersonsModule { }
