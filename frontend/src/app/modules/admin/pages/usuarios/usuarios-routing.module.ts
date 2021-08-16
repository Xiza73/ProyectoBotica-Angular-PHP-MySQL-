import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clientes',
        component: TablaUsuarioComponent
      },
      {
        path: 'empleados',
        component: TablaUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
