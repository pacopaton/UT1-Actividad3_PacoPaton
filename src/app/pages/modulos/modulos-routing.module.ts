import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulosPage } from './modulos.page';

const routes: Routes = [
  {
    path: '',
    component: ModulosPage,
    children: [
      {
        path: 'dam1',
        loadChildren: () => import('../dam1/dam1.module').then(m => m.Dam1PageModule)
      },
      {
        path: 'dam2',
        loadChildren: () => import('../dam2/dam2.module').then(m => m.Dam2PageModule)
      },
      {
        path: 'fct',
        loadChildren: () => import('../fct/fct.module').then(m => m.FctPageModule)
      },
      {
        path: '',
        redirectTo: '/modulos/dam1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/modulos/dam1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulosPageRoutingModule {}
