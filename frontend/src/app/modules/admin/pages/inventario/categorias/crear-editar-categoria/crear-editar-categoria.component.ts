import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import icClose from '@iconify/icons-ic/twotone-close';
import icTextFields from '@iconify/icons-ic/twotone-text-fields';
import icShortText from '@iconify/icons-ic/twotone-short-text';

import { Categoria } from '../../../../interfaces/categoria.interface';

@Component({
  selector: 'vex-crear-editar-categoria',
  templateUrl: './crear-editar-categoria.component.html',
  styleUrls: ['./crear-editar-categoria.component.scss']
})
export class CrearEditarCategoriaComponent implements OnInit {

  modo: 'crear' | 'editar';
  form: FormGroup;
  categoria: Categoria;

  // Iconos
  icClose = icClose;

  icTextFields = icTextFields;
  icShortText = icShortText;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CrearEditarCategoriaComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.modo = this.defaults.modo;

    if (this.defaults.categoria) {
      this.categoria = this.defaults.categoria;
    } else {
      this.categoria = {} as Categoria;
    }

    this.form = this.fb.group({
      nombre      : [this.categoria.nombre, [ Validators.required ]],
      descripcion : [this.categoria.descripcion, [ Validators.required ]],
      estado      : [this.categoria.estado, [ Validators.required ]]
    });
  }

  guardar() {
    if (this.modo === 'crear') {
      this.crearCategoria();
    } else if (this.modo === 'editar') {
      this.actualizarCategoria();
    }
  }

  crearCategoria() {
    const categoria = this.form.value;

    this.dialogRef.close(categoria);
  }

  actualizarCategoria() {
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
