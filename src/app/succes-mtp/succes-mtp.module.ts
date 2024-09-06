import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesMtpPageRoutingModule } from './succes-mtp-routing.module';

import { SuccesMtpPage } from './succes-mtp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesMtpPageRoutingModule
  ],
  declarations: [SuccesMtpPage]
})
export class SuccesMtpPageModule {}
