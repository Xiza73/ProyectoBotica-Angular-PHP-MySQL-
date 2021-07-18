import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductsListComponent,
        pathMatch: 'full'
      },
      {
        path: 'nuevo',
        component: ProductsFormComponent
      },
      {
        path: 'editar/:id',
        component: ProductsFormComponent
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
export class ProductsRoutingModule { }
