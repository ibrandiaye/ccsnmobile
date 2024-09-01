import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnCoursPageRoutingModule } from './en-cours-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EnCoursPage } from './en-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnCoursPageRoutingModule,
    ExploreContainerComponentModule,

  ],
  declarations: [EnCoursPage]
})
export class EnCoursPageModule {}
