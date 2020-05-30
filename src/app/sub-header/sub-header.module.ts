import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubHeaderRoutingModule } from './sub-header-routing.module';
import { SubHeaderComponent } from './sub-header.component';


@NgModule({
  declarations: [SubHeaderComponent],
  imports: [
    CommonModule,
    SubHeaderRoutingModule
  ]
})
export class SubHeaderModule { }
