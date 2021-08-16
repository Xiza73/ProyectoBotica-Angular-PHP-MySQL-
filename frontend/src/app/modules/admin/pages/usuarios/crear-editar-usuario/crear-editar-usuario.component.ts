import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icEmail from '@iconify/icons-ic/twotone-alternate-email';
import icSupervisedUser from '@iconify/icons-ic/twotone-supervised-user-circle';

import { Usuario } from '../../../interfaces/usuario.interface';


@Component({
  selector: 'vex-crear-editar-usuario',
  templateUrl: './crear-editar-usuario.component.html',
  styleUrls: ['./crear-editar-usuario.component.scss']
})
export class CrearEditarUsuarioComponent implements OnInit {

  tipoUsuario: 'cliente' | 'empleado';
  modo: 'crear' | 'editar';
  form: FormGroup;
  usuario: Usuario;

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icPicture = icPicture;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  icEmail = icEmail;
  icSupervisedUser = icSupervisedUser;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CrearEditarUsuarioComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.tipoUsuario = this.defaults.tipoUsuario;
    this.modo = this.defaults.modo;

    if (this.defaults.usuario) {
      this.usuario = this.defaults.usuario;
    } else {
      this.usuario = {} as Usuario;
    }

    this.form = this.fb.group({
      nombres   : [this.usuario.nombres, [ Validators.required ]],
      apellidos : [this.usuario.apellidos, [ Validators.required ]],
      dni       : [this.usuario.dni, [ Validators.required ]],
      email     : [this.usuario.email, [ Validators.required ]],
      telefono  : [this.usuario.telefono, [ Validators.required ]],
      direccion : [this.usuario.direccion, [ Validators.required ]],
      idRol     : [this.usuario.idRol, [ Validators.required ]],
      estado    : [this.usuario.estado, [ Validators.required ]]
    });
  }

  guardar() {
    if (this.modo === 'crear') {
      this.crearUsuario();
    } else if (this.modo === 'editar') {
      this.actualizarUsuario();
    }
  }

  crearUsuario() {
    const usuario = this.form.value;

    this.dialogRef.close(usuario);
  }

  actualizarUsuario() {
    const usuario = this.form.value;
    usuario.id = this.defaults.id;

    this.dialogRef.close(usuario);
  }

  esModoCrear() {
    return this.modo === 'crear';
  }

  esModoEditar() {
    return this.modo === 'editar';
  }
}
