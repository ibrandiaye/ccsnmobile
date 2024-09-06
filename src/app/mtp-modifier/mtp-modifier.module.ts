import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtpModifierPageRoutingModule } from './mtp-modifier-routing.module';

import { MtpModifierPage } from './mtp-modifier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtpModifierPageRoutingModule
  ],
  declarations: [MtpModifierPage]
})
export class MtpModifierPageModule {}
