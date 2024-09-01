import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnCoursPage } from './en-cours.page';

const routes: Routes = [
  {
    path: '',
    component: EnCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnCoursPageRoutingModule {}
