import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsOfSponsorshipComponent } from './terms-of-sponsorship.component';

const routes: Routes = [{ path: '', component: TermsOfSponsorshipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfSponsorshipRoutingModule { }
