import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  title: string = 'Productos';
  subtitle: string;
  btnLabel: string;
  backURL: string = '/admin/productos'

  productForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    price: ['', [ Validators.required, Validators.min(0) ]],
    stock: ['', [ Validators.required, Validators.min(0) ]],
    category: ['', [ Validators.required ]],
    image: ['', [ Validators.required ]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.router.url === '/productos/nuevo') {
      this.subtitle = 'Nuevo producto';
      this.btnLabel = 'Crear';
    } else {
      this.subtitle = 'Editar producto';
      this.btnLabel = 'Editar';
    }
  }

  onImageSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.productForm.get('image').setValue(file);
    }
  }

  createProduct(): void {
    console.log(this.productForm.value);
  }

}
