import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/api/user.service';

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

  userForm: FormGroup = this.fb.group({
    nombre   : [ '', [  ] ],
    apellido : [ '', [  ] ],
    email    : [ '', [  ] ],
    password : [ '', [  ] ],
    telefono : [ '', [  ] ],
    direccion: [ '', [  ] ],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsuarios();

    this.currentURL = this.router.url;

    if (this.currentURL === '/admin/usuarios/empleados/nuevo') {
      this.title = 'Empleados';
      this.subtitle = 'Nuevo empleado';
      this.btnLabel = 'Crear';
      this.backURL = '/admin/usuarios/empleados';
    } else if (this.currentURL === '/admin/usuarios/clientes/nuevo') {
      this.title = 'Clientes';
      this.subtitle = 'Nuevo cliente';
      this.btnLabel = 'Crear';
      this.backURL = '/admin/usuarios/clientes';
    } else if (this.currentURL.includes('/usuarios/empleados/editar')) {
      this.title = 'Empleados';
      this.subtitle = 'Editar empleado';
      this.btnLabel = 'Editar';
      this.backURL = '/admin/usuarios/empleados';
    } else {
      this.title = 'Clientes';
      this.subtitle = 'Editar cliente';
      this.btnLabel = 'Editar';
      this.backURL = '/admin/usuarios/clientes';
    }
  }

  createUser() {
    this.userService.createUser(this.userForm.value).subscribe(data => {
      console.log('insertado');
    }, err => {
      console.log(err);
      console.log("error al agregar usuario");
    });
  }

  getUsuarios() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  
  // nombre, apellido, email, password, telefono, direccion
}
