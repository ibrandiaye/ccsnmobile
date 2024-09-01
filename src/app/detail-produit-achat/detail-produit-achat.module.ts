import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProduitAchatPageRoutingModule } from './detail-produit-achat-routing.module';

import { DetailProduitAchatPage } from './detail-produit-achat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProduitAchatPageRoutingModule
  ],
  declarations: [DetailProduitAchatPage]
})
export class DetailProduitAchatPageModule {}
