import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsorshopComponent } from './sponsorshop.component';

const routes: Routes = [{ path: '', component: SponsorshopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorshopRoutingModule { }
