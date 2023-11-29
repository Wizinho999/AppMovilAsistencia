import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaPageRoutingModule } from './clima-routing.module';

import { ClimaPage } from './clima.page';

import {DateFormattingPipe} from '../pipes/date-formatting.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaPageRoutingModule
  ],
  declarations: [ClimaPage,
                DateFormattingPipe,
  ],
  exports: [
            DateFormattingPipe,
  ]
})
export class ClimaPageModule {}
