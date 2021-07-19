import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  title: string = 'Categorías';
  subtitle: string;
  btnLabel: string;
  backURL: string = '/admin/categorias'

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url === '/categorias/nuevo') {
      this.subtitle = 'Nueva categoría';
      this.btnLabel = 'Crear';
    } else {
      this.subtitle = 'Editar categoría';
      this.btnLabel = 'Editar';
    }
  }

}
