import { Component, Input, OnInit, ViewChild } from '@angular/core';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Producto } from 'src/app/modules/admin/interfaces/producto.interface';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CrearEditarProductoComponent } from '../crear-editar-producto/crear-editar-producto.component';
import { MatSelectChange } from '@angular/material/select';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'vex-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class TablaProductoComponent implements OnInit {

  productos: Producto[] = [
    {
      id: 1,
      idCategoria: 1,
      nombre: 'Producto A',
      descripcion: 'Producto A',
      imagen: 'string',
      precio: 20,
      stock: 25,
      estado: 1
    }
  ];

  @Input()
  columns: TableColumn<Producto>[] = [
    { label: 'Casilla', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Nombre', property: 'nombre', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Descripción', property: 'descripcion', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Precio', property: 'precio', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Stock', property: 'stock', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Categoría', property: 'idCategoria', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Estado', property: 'estado', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Acciones', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Producto> | null;
  selection = new SelectionModel<Producto>(true, []);
  searchCtrl = new FormControl();

  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog: MatDialog
  ) {}

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.productos);

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  crearCategoria() {
    this.dialog.open(CrearEditarProductoComponent, {
      data: {
        modo: 'crear'
      },
      width: '700px'
    }).afterClosed().subscribe((producto: Producto) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (producto) {
        console.log(producto);
      }
    });
  }

  actualizarCategoria(producto: Producto) {
    this.dialog.open(CrearEditarProductoComponent, {
      data: {
        modo: 'editar',
        producto
      },
      width: '600px'
    }).afterClosed().subscribe((producto: Producto) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (producto) {
        console.log(producto);
      }
    });
  }

  eliminarCategoria(producto: Producto) {
    
  }

  eliminarCategorias(productos: Producto[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
     productos.forEach(c => this.eliminarCategoria(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Producto) {
    
  }

}
