import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  currentURL: string;
  title: string;
  subtitle: string;
  btnLabel: string;
  backURL: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentURL = this.router.url;

    if (this.currentURL === '/usuarios/empleados/nuevo') {
      this.title = 'Empleados';
      this.subtitle = 'Nuevo empleado';
      this.btnLabel = 'Crear';
      this.backURL = '/usuarios/empleados';
    } else if (this.currentURL === '/usuarios/clientes/nuevo') {
      this.title = 'Clientes';
      this.subtitle = 'Nuevo cliente';
      this.btnLabel = 'Crear';
      this.backURL = '/usuarios/clientes';
    } else if (this.currentURL.includes('/usuarios/empleados/editar')) {
      this.title = 'Empleados';
      this.subtitle = 'Editar empleado';
      this.btnLabel = 'Editar';
      this.backURL = '/usuarios/empleados';
    } else {
      this.title = 'Clientes';
      this.subtitle = 'Editar cliente';
      this.btnLabel = 'Editar';
      this.backURL = '/usuarios/clientes';
    }
  }

  can

}
