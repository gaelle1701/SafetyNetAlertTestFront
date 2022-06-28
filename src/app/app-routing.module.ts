import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'persons',
    loadChildren:() => import('./persons/persons.module').then(m => m.PersonsModule)
  },
  { path: 'firestations',
  loadChildren:() => import('./firestations/firestations.module').then(m => m.FirestationsModule)
  },
  // { 
  //   path: "**",
  //   loadChildren:() => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
