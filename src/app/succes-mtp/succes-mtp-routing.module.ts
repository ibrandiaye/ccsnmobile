import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesMtpPage } from './succes-mtp.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesMtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesMtpPageRoutingModule {}
