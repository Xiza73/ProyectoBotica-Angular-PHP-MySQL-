import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CrearEditarUsuarioComponent } from './crear-editar-usuario/crear-editar-usuario.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconModule } from '@visurel/iconify-angular';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    TablaUsuarioComponent,
    CrearEditarUsuarioComponent,
    TablaUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,

    PageLayoutModule,
    BreadcrumbsModule,
    IconModule,

    MaterialModule
  ]
})
export class UsuariosModule { }
