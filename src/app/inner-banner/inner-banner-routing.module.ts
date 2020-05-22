import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnerBannerComponent } from './inner-banner.component';

const routes: Routes = [{ path: '', component: InnerBannerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerBannerRoutingModule { }
