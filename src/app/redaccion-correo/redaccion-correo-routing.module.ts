import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedaccionCorreoPage } from './redaccion-correo.page';

const routes: Routes = [
  {
    path: '',
    component: RedaccionCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedaccionCorreoPageRoutingModule {}
