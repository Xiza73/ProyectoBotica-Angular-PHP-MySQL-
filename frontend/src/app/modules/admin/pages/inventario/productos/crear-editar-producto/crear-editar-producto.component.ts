import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';

import { Producto } from 'src/app/modules/admin/interfaces/producto.interface';

@Component({
  selector: 'vex-crear-editar-producto',
  templateUrl: './crear-editar-producto.component.html',
  styleUrls: ['./crear-editar-producto.component.scss']
})
export class CrearEditarProductoComponent implements OnInit {

  modo: 'crear' | 'editar';
  form: FormGroup;
  producto: Producto;

  // Iconos
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CrearEditarProductoComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.modo = this.defaults.modo;

    if (this.defaults.producto) {
      this.modo = 'editar';
      this.producto = this.defaults.producto;
    } else {
      this.modo = 'crear';
      this.producto = {} as Producto;
    }

    this.form = this.fb.group({
      nombre      : [this.producto.nombre, [ Validators.required ]],
      descripcion : [this.producto.descripcion, [ Validators.required ]],
      precio      : [this.producto.precio, [ Validators.required ]],
      stock       : [this.producto.stock, [ Validators.required ]],
      idCategoria : [this.producto.idCategoria, [ Validators.required ]],
      estado      : [this.producto.estado, [ Validators.required ]],
      imagen      : [this.producto.imagen, [ Validators.required ]]
    });
  }

  guardar() {
    if (this.modo === 'crear') {
      this.crearProducto();
    } else if (this.modo === 'editar') {
      this.actualizarProducto();
    }
  }

  crearProducto() {
    const producto = this.form.value;

    this.dialogRef.close(producto);
  }

  actualizarProducto() {
    const producto = this.form.value;
    producto.id = this.defaults.producto.id;

    this.dialogRef.close(producto);
  }

  esModoCrear() {
    return this.modo === 'crear';
  }

  esModoEditar() {
    return this.modo === 'editar';
  }

  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
