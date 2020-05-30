import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmshopComponent } from './farmshop.component';

const routes: Routes = [{ path: '', component: FarmshopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmshopRoutingModule { }
