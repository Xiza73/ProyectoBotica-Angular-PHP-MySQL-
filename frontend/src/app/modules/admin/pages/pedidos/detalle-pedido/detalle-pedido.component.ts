import { Component, OnInit } from '@angular/core';

import icClose from '@iconify/icons-ic/twotone-close';
import { Pedido } from '../../../interfaces/pedido.interface';

@Component({
  selector: 'vex-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss']
})
export class DetallePedidoComponent implements OnInit {

  pedido: Pedido;

  // Iconos
  icClose = icClose;

  constructor() { }

  ngOnInit(): void {
  }

}
