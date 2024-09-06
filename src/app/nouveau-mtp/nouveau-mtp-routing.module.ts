import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauMtpPage } from './nouveau-mtp.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauMtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauMtpPageRoutingModule {}
