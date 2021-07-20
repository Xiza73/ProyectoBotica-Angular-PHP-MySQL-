import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'http://localhost/backend';

  constructor(private http: HttpClient) { }

  createUser(user: any){
    const { nombre, apellido, email, password, telefono, direccion } = user;
    const estado = "1";
    console.log(user);
    return this.http.get(`${this.API}/gestionUsuario/aniadirUsuario.php?nombre=${nombre}&apellido=${apellido}&email=${email}&password=${password}&telefono=${telefono}&direccion=${direccion}&estado=${estado}&rol=Repartidor`);
  }

  getUsers() {
    return this.http.get(`${this.API}/gestionUsuario/obtenerUsuario.php`);
  }
}

/*
    $nombre=$_GET['nombre'];
    $apellido=$_GET['apellido'];
    $email=$_GET['email'];
    $password=$_GET['password'];
    $telefono=$_GET['telefono'];
    $direccion=$_GET['direccion'];
    $estado=$_GET['estado'];


*/