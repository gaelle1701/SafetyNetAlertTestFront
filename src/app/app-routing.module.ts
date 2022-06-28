import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirestationPageComponent } from './pages/firestation-page/firestation-page.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PersonPageComponent } from './persons/pages/page-list-persons/page-list-persons.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'person', component: PersonPageComponent },
  { path: 'firestation', component: FirestationPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
