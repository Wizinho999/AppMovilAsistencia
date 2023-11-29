import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedaccionCorreoPageRoutingModule } from './redaccion-correo-routing.module';

import { RedaccionCorreoPage } from './redaccion-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedaccionCorreoPageRoutingModule
  ],
  declarations: [RedaccionCorreoPage]
})
export class RedaccionCorreoPageModule {}
