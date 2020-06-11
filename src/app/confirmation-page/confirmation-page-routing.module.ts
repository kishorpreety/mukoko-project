import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPageComponent } from './confirmation-page.component';

const routes: Routes = [{ path: '', component: ConfirmationPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationPageRoutingModule { }
