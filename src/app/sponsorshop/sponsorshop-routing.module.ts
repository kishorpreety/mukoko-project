import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsorshopComponent } from './sponsorshop.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: SponsorshopComponent },
  { path: 'sponsorshop/:id', component: DetailsComponent },
  { path: 'sponsorshop/cart', component: CartComponent },
  { path: 'sponsorshop/confirmation', component: ConfirmationPageComponent },
  { path: 'sponsorshop/checkout', component: CheckoutComponent },
  { path: 'sponsorshop/contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorshopRoutingModule { }
