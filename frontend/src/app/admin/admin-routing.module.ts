import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../shared/components/layout/content/content.component';
import { admin } from '../shared/routes/admin';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: admin
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
