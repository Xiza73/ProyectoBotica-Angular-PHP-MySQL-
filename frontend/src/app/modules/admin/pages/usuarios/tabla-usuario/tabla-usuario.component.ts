import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { Usuario } from '../../../interfaces/usuario.interface';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CrearEditarUsuarioComponent } from '../crear-editar-usuario/crear-editar-usuario.component';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'vex-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.scss'],
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
export class TablaUsuarioComponent implements OnInit, AfterViewInit {

  tipoUsuario: 'cliente' | 'empleado';

  usuarios: Usuario[] = [
    {
      nombres: 'Angel',
      apellidos: 'Romaní',
      dni: 74999888,
      email: 'angel@demo.com',
      telefono: '98998889',
      direccion: 'Av. Venezuela',
      id: 1,
      idRol: 1,
      estado: 1
    }
  ];

  @Input()
  columns: TableColumn<Usuario>[] = [
    { label: 'Casilla', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Código', property: 'id', type: 'text', visible: true },
    { label: 'Nombre', property: 'nombre', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Nombres', property: 'nombres', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Apellidos', property: 'apellidos', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'DNI', property: 'dni', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Email', property: 'email', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Teléfono', property: 'telefono', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Dirección', property: 'direccion', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Rol', property: 'idRol', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Estado', property: 'estado', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Acciones', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Usuario> | null;
  selection = new SelectionModel<Usuario>(true, []);
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
    private dialog: MatDialog,
    private router: Router
  ) {}

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    if (this.router.url === '/admin/usuarios/clientes') {
      this.tipoUsuario = 'cliente';
    } else {
      this.tipoUsuario = 'empleado';
    }

    this.dataSource = new MatTableDataSource(this.usuarios);

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  crearUsuario() {
    this.dialog.open(CrearEditarUsuarioComponent, {
      data: {
        modo: 'crear',
        tipoUsuario: this.tipoUsuario
      }
    }).afterClosed().subscribe((usuario: Usuario) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (usuario) {
        console.log(usuario);
      }
    });
  }

  actualizarUsuario(usuario: Usuario) {
    this.dialog.open(CrearEditarUsuarioComponent, {
      data: {
        modo: 'editar',
        tipoUsuario: this.tipoUsuario,
        usuario
      },
      width: '600px'
    }).afterClosed().subscribe((usuario: Usuario) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (usuario) {
        console.log(usuario);
      }
    });
  }

  eliminarUsuario(usuario: Usuario) {
    
  }

  eliminarUsuarios(usuario: Usuario[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    usuario.forEach(u => this.eliminarUsuario(u));
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

  onLabelChange(change: MatSelectChange, row: Usuario) {
    
  }
}


