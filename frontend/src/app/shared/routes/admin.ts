import { Routes } from '@angular/router';


export const admin: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../admin/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('../../admin/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('../../admin/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('../../admin/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('../../admin/users/users.module').then(m => m.UsersModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
