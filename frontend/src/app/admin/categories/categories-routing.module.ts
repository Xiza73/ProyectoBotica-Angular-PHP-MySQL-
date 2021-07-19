import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CategoriesListComponent,
        pathMatch: 'full'
      },
      {
        path: 'nuevo',
        component: CategoriesFormComponent
      },
      {
        path: 'editar/:id',
        component: CategoriesFormComponent
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
export class CategoriesRoutingModule { }
