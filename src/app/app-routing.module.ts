import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule }              from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
   { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}