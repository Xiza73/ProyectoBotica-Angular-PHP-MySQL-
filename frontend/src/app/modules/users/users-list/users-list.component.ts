import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  customers = [
    {
      id: 1,
      nombre: 'Angel Romaní',
      dni: '99888999',
      email: 'angel@demo.com',
      telefono: '999999999',
      rol: 'cliente'
    },
    {
      id: 2,
      nombre: 'Angel Romaní',
      dni: '99888999',
      email: 'angel@demo.com',
      telefono: '999999999',
      rol: 'cliente'
    },
    {
      id: 3,
      nombre: 'Angel Romaní',
      dni: '99888999',
      email: 'angel@demo.com',
      telefono: '999999999',
      rol: 'cliente'
    },
  ];

  employees = [
    {
      id: 1,
      nombre: 'Angel Romaní',
      dni: '99888999',
      email: 'angel@demo.com',
      telefono: '999999999',
      rol: 'admin'
    },
    {
      id: 2,
      nombre: 'Angel Romaní',
      dni: '99888999',
      email: 'angel@demo.com',
      telefono: '999999999',
      rol: 'vendedor'
    },
    {
      id: 3,
      nombre: 'Angel Romaní',
      dni: '99888999',
      email: 'angel@demo.com',
      telefono: '999999999',
      rol: 'almacenero'
    },
];

  // Datatable
  columns = [
    {name:'Nombre'},
    {name:'DNI'},
    {name:'Email'},
    {name:'Teléfono'},
    {name: 'Opciones', sortable: false}
  ];

  title: string;
  btnLabel: string;
  isCustomersPage: boolean;
  editURL: string;

  users = [];


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url === '/usuarios/clientes') {
      this.isCustomersPage = true;
    }

    if (this.isCustomersPage) {
      this.title = "Clientes";
      this.btnLabel = "cliente";
      this.users = this.customers;
      this.editURL = '/usuarios/clientes/editar';
    } else {
      this.title = "Empleados";
      this.btnLabel = "empleado";
      this.users = this.employees;
      this.editURL = '/usuarios/empleados/editar';
    }

  }



}
