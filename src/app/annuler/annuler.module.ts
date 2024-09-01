import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { AnnulerPageRoutingModule } from './annuler-routing.module';

import { AnnulerPage } from './annuler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnulerPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [AnnulerPage]
})
export class AnnulerPageModule {}
