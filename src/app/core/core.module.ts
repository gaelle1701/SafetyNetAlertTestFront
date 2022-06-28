import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UIModule, HeaderComponent
  ]
})
export class CoreModule { }
