import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauMtpPageRoutingModule } from './nouveau-mtp-routing.module';

import { NouveauMtpPage } from './nouveau-mtp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauMtpPageRoutingModule
  ],
  declarations: [NouveauMtpPage]
})
export class NouveauMtpPageModule {}
