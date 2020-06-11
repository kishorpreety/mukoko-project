import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorshopRoutingModule } from './sponsorshop-routing.module';
import { SponsorshopComponent } from './sponsorshop.component';
import { DetailsComponent } from './details/details.component';
//import { ContactComponent } from './contact/contact.component';
//import { CartComponent } from './cart/cart.component';
//import { CheckoutComponent } from './checkout/checkout.component';
//import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';


@NgModule({
  declarations: [SponsorshopComponent, DetailsComponent, //ContactComponent, CartComponent, CheckoutComponent, ConfirmationPageComponent
  ],
  imports: [
    CommonModule,
    SponsorshopRoutingModule
  ]
})
export class SponsorshopModule { }
