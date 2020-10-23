import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulosPage } from './modulos.page';

const routes: Routes = [
  {
    path: '',
    component: ModulosPage
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulosPageRoutingModule {}
