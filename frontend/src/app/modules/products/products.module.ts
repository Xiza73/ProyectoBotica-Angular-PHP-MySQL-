import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    NgxDatatableModule,

  ]
})
export class ProductsModule { }
