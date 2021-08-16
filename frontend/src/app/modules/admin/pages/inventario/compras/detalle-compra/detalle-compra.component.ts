import { Component, OnInit } from '@angular/core';

import icClose from '@iconify/icons-ic/twotone-close';
import { Compra } from 'src/app/modules/admin/interfaces/compra.interface';

@Component({
  selector: 'vex-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.scss']
})
export class DetalleCompraComponent implements OnInit {

  compra: Compra;

  // Iconos
  icClose = icClose;

  constructor() { }

  ngOnInit(): void {
  }

}
