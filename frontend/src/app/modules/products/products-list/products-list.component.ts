import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = [
    {
      codigo: '7753441232096',
      nombre: 'ENSURE ADVANCE VAINILLA X 850 GR - ABBOTT',
      precio: 95.5,
      stock: 10,
      categoria: 'Cuidado de la Salud'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
