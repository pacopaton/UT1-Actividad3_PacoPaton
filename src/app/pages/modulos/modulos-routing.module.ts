import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulosPage } from './modulos.page';

const routes: Routes = [
  {
    path: '',
    component: ModulosPage
  },
  {
    path: 'dam1',
    loadChildren: () => import('../dam1/dam1-routing.module').then( m => m.Dam1PageRoutingModule)
  },
  {
    path: 'dam2',
    loadChildren: () => import('../dam2/dam2-routing.module').then( m => m.Dam2PageRoutingModule)
  },
  {
    path: 'fct',
    loadChildren: () => import('../fct/fct-routing.module').then( m => m.FctPageRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulosPageRoutingModule {}
