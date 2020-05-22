import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerBannerRoutingModule } from './inner-banner-routing.module';
import { InnerBannerComponent } from './inner-banner.component';


@NgModule({
  declarations: [InnerBannerComponent],
  imports: [
    CommonModule,
    InnerBannerRoutingModule
  ]
})
export class InnerBannerModule { }
