import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories = [
    {
      nombre: 'Cuidado de la Salud',
      descripcion: ''
    },
    {
      nombre: 'Cuidado Personal',
      descripcion: ''
    },
    {
      nombre: 'Mamá y Bebé',
      descripcion: ''
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
