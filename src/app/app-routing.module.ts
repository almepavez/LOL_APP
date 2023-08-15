import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'campeones',
    loadChildren: () => import('./campeones/campeones.module').then( m => m.CampeonesPageModule)
  },
  {
    path: 'skins',
    loadChildren: () => import('./skins/skins.module').then( m => m.SkinsPageModule)
  },
  {
    path: 'guia-campeones',
    loadChildren: () => import('./guia-campeones/guia-campeones.module').then( m => m.GuiaCampeonesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
