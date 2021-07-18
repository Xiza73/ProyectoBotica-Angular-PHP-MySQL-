import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    CategoriesFormComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoriesRoutingModule,
    NgxDatatableModule
  ]
})
export class CategoriesModule { }
