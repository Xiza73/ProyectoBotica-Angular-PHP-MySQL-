import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaPedidoComponent } from './tabla-pedido/tabla-pedido.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TablaPedidoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
