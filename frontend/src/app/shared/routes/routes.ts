import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'sample-page',
    loadChildren: () => import('../../modules/sample/sample.module').then(m => m.SampleModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('../../modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('../../modules/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('../../modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('../../modules/users/users.module').then(m => m.UsersModule)
  }
];
