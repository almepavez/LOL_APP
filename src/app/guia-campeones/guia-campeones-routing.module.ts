import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaCampeonesPage } from './guia-campeones.page';

const routes: Routes = [
  {
    path: '',
    component: GuiaCampeonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiaCampeonesPageRoutingModule {}
