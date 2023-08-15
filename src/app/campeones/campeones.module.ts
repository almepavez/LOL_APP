import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonesPageRoutingModule } from './campeones-routing.module';

import { CampeonesPage } from './campeones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonesPageRoutingModule
  ],
  declarations: [CampeonesPage]
})
export class CampeonesPageModule {}
