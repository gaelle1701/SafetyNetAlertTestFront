import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirestationsRoutingModule } from './firestations-routing.module';
import { PageListFirestationsComponent } from './pages/page-list-firestations/page-list-firestations.component';
import { FirestationCardComponent } from './firestation-card/firestation-card.component';


@NgModule({
  declarations: [
    PageListFirestationsComponent,
    FirestationCardComponent
  ],
  imports: [
    CommonModule,
    FirestationsRoutingModule
  ]
})
export class FirestationsModule { }
