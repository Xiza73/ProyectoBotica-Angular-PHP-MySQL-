import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'empleados',
        component: UsersListComponent
      },
      {
        path: 'clientes',
        component: UsersListComponent
      },
      {
        path: 'empleados/nuevo',
        component: UsersFormComponent
      },
      {
        path: 'empleados/editar/:id',
        component: UsersFormComponent
      },
      {
        path: 'clientes/nuevo',
        component: UsersFormComponent
      },
      {
        path: 'clientes/editar/:id',
        component: UsersFormComponent
      },
      {
        path: '**',
        redirectTo: 'clientes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
