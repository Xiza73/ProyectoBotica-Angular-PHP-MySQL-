import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders = [
    {
      codigo: 12345,
      cliente: {
        dni: 99888999
      },
      monto: 200,
      fechaPedido: '18/07/2021',
      estado: 'pendiente'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
