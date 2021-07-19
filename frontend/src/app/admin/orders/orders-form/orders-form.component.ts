import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss']
})
export class OrdersFormComponent implements OnInit {
  title: string = 'Pedidos';
  subtitle: string = 'Detalles';
  btnLabel: string = 'Actualizar estado';
  backURL: string = '/pedidos';

  pedido =  {
    codigo: 12345,
    cliente: {
      nombre: 'Angel',
      apellido: 'Romani',
      telefono: '989989999',
      dni: 98999888
    },
    monto: 37,
    fechaPedido: '18/07/2021',
    estado: 'pendiente',
    details: [
      {
        nombre: 'Panadol',
        precio: 5,
        cantidad: 5 
      },
      {
        nombre: 'Aspirina',
        precio: 2,
        cantidad: 6 
      }
    ],
    direccion: 'lo que sea'
  };

  constructor() { }

  ngOnInit(): void {
    
  }




}
