import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner.component';



@NgModule({
  declarations: [PartnerComponent],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    ReactiveFormsModule
  ]
})
export class PartnerModule { }
