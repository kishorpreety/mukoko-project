import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmshopRoutingModule } from './farmshop-routing.module';
import { FarmshopComponent } from './farmshop.component';
import { DetailComponent } from './detail/detail.component';
/*import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';*/


@NgModule({
  declarations: [FarmshopComponent, DetailComponent,
  //CartComponent, CheckoutComponent, OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    FarmshopRoutingModule
  ]
})
export class FarmshopModule { }
