import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrdersListComponent,
        pathMatch: 'full'
      },
      {
        path: 'nuevo',
        component: OrdersFormComponent
      },
      {
        path: 'editar/:id',
        component: OrdersFormComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
