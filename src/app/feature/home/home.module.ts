import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    PickerModule
  ]
})
export class HomeModule { }
