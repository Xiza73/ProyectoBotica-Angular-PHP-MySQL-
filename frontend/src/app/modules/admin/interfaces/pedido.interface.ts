export interface Pedido {
  id?: number;
  idCliente?: number;
  idEmpleado?: number;
  direccion?: string;
  monto?: number;
  fechaCreacion?: string;
  fechaEntrega?: string;
  metodoPago?: string;
  estado?: string;
}