import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListPersonsComponent } from './pages/page-list-persons/page-list-persons.component';

const routes: Routes = [
  { path: '', component: PageListPersonsComponent },
  // { path: 'add', component: PageAddPersonComponent },
  // { path: 'edit', component: PageEditPersonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
