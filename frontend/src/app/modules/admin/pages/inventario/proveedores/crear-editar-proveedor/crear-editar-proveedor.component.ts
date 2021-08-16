import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import icClose from '@iconify/icons-ic/twotone-close';
import icShortText from '@iconify/icons-ic/twotone-short-text';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-alternate-email';
import icPerson from '@iconify/icons-ic/twotone-person';

import { Proveedor } from 'src/app/modules/admin/interfaces/proveedor.interface';

@Component({
  selector: 'vex-crear-editar-proveedor',
  templateUrl: './crear-editar-proveedor.component.html',
  styleUrls: ['./crear-editar-proveedor.component.scss']
})
export class CrearEditarProveedorComponent implements OnInit {

  modo: 'crear' | 'editar';
  form: FormGroup;
  proveedor: Proveedor;

  // Iconos
  icClose = icClose;
  icShortText = icShortText;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  icEmail = icEmail;
  icPerson = icPerson;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CrearEditarProveedorComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.modo = this.defaults.modo;

    if (this.defaults.proveedor) {
      this.proveedor = this.defaults.proveedor;
    } else {
      this.proveedor = {} as Proveedor;
    }

    this.form = this.fb.group({
      nombre      : [this.proveedor.nombre, [ Validators.required ]],
      telefono    : [this.proveedor.telefono, [ Validators.required ]],
      direccion   : [this.proveedor.direccion, [ Validators.required ]],
      estado      : [this.proveedor.estado, [ Validators.required ]]
    });
  }

  guardar() {
    if (this.modo === 'crear') {
      this.crearProveedor();
    } else if (this.modo === 'editar') {
      this.actualizarProveedor();
    }
  }

  crearProveedor() {
    const categoria = this.form.value;

    this.dialogRef.close(categoria);
  }

  actualizarProveedor() {
    const categoria = this.form.value;
    categoria.id = this.defaults.categoria.id;

    this.dialogRef.close(categoria);
  }

  esModoCrear() {
    return this.modo === 'crear';
  }

  esModoEditar() {
    return this.modo === 'editar';
  }
}
