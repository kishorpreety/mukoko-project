import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubHeaderComponent } from './sub-header.component';

const routes: Routes = [{ path: '', component: SubHeaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubHeaderRoutingModule { }
