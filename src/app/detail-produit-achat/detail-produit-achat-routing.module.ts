import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProduitAchatPage } from './detail-produit-achat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProduitAchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProduitAchatPageRoutingModule {}
