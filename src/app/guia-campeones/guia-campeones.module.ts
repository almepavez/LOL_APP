import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiaCampeonesPageRoutingModule } from './guia-campeones-routing.module';

import { GuiaCampeonesPage } from './guia-campeones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiaCampeonesPageRoutingModule
  ],
  declarations: [GuiaCampeonesPage]
})
export class GuiaCampeonesPageModule {}
