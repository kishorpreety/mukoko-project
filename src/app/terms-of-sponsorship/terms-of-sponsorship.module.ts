import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfSponsorshipRoutingModule } from './terms-of-sponsorship-routing.module';
import { TermsOfSponsorshipComponent } from './terms-of-sponsorship.component';


@NgModule({
  declarations: [TermsOfSponsorshipComponent],
  imports: [
    CommonModule,
    TermsOfSponsorshipRoutingModule
  ]
})
export class TermsOfSponsorshipModule { }
