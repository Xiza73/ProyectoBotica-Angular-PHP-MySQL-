import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    API = 'http://localhost/backend';

    constructor(private http: HttpClient) { }

    getLogin(user: any, pass: string){
        return this.http.get(`${this.API}/Login/login.php?user=${user}&password=${pass}`);
    }
}