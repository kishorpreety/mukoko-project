import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmshopComponent } from './farmshop.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
{ path: '', component: FarmshopComponent },
 { path: ':id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmshopRoutingModule { }
