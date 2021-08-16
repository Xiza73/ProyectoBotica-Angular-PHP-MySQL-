import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icPageview from '@iconify/icons-ic/twotone-pageview';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Pedido } from '../../../interfaces/pedido.interface';
import { EditarPedidoComponent } from '../editar-pedido/editar-pedido.component';
import { DetallePedidoComponent } from '../detalle-pedido/detalle-pedido.component';

@UntilDestroy()
@Component({
  selector: 'vex-tabla-pedido',
  templateUrl: './tabla-pedido.component.html',
  styleUrls: ['./tabla-pedido.component.scss'],
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
export class TablaPedidoComponent implements OnInit {

  pedidos: Pedido[] = [
    {
      id: 1,
      idCliente: 1,
      idEmpleado: 2,
      direccion: 'Av. Perú',
      monto: 200,
      fechaCreacion: '09/08/2021',
      fechaEntrega: '09/08/2021',
      metodoPago: 'efectivo',
      estado: 'pendiente'
    }
  ];

  @Input()
  columns: TableColumn<Pedido>[] = [
    // { label: 'Casilla', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Código', property: 'id', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Cliente', property: 'idCliente', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Empleado', property: 'idEmpleado', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Dirección', property: 'direccion', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Monto', property: 'monto', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Creado', property: 'fechaCreacion', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Entrega', property: 'fechaEntrega', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Método de Pago', property: 'metodoPago', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Estado', property: 'estado', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Acciones', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Pedido> | null;
  selection = new SelectionModel<Pedido>(true, []);
  searchCtrl = new FormControl();

  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icPageview = icPageview;

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
    this.dataSource = new MatTableDataSource(this.pedidos);

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  crearPedido() {
    
  }

  detallePedido(pedido: Pedido) {
    this.dialog.open(DetallePedidoComponent, {
      data: {
        pedido
      },
      width: '900px'
    }).afterClosed().subscribe((pedido: Pedido) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (pedido) {
        console.log(pedido);
      }
    });
  }

  actualizarPedido(pedido: Pedido) {
    this.dialog.open(EditarPedidoComponent, {
      data: {
        pedido
      },
      width: '600px'
    }).afterClosed().subscribe((pedido: Pedido) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (pedido) {
        console.log(pedido);
      }
    });
  }

  eliminarPedido(pedido: Pedido) {
    
  }

  eliminarPedidos(pedidos: Pedido[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
     pedidos.forEach(c => this.eliminarPedido(c));
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

  onLabelChange(change: MatSelectChange, row: Pedido) {
    
  }

}
