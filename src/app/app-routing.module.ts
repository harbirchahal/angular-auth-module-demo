import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core';
import {
  AUTH_ROUTES,
  AuthGuard
} from './auth';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...AUTH_ROUTES,
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
