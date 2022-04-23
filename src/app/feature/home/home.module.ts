import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule
  ]
})
export class HomeModule { }
