import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtpModifierPage } from './mtp-modifier.page';

const routes: Routes = [
  {
    path: '',
    component: MtpModifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtpModifierPageRoutingModule {}
