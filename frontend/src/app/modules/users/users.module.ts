import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    NgxDatatableModule
  ]
})
export class UsersModule { }
