import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailedComponent } from './emailed/emailed.component';
import { SharedComponent } from './shared/shared.component';
import { ViewedComponent } from './viewed/viewed.component';

const routes: Routes = [
  { path: '', redirectTo: '/emailed', pathMatch: 'full' },
  { path: 'emailed', component: EmailedComponent },
  { path: 'shared', component: SharedComponent },
  { path: 'viewed', component: ViewedComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
