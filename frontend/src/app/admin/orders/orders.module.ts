import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    OrdersFormComponent,
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
    NgxDatatableModule
  ],
  providers: []
})
export class OrdersModule { }
