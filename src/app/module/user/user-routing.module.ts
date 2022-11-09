import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserAuthGuard } from 'src/app/core/guards/user-auth.guard';

import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
  {path:'',
  component:DashboardComponent,
  canActivate:[UserAuthGuard],
  canActivateChild:[UserAuthGuard],
  children:[
    {path:'',redirectTo:'product-list',pathMatch:'full'},
    {path:'product-list',component:ProductListComponent},
    {path:'add-product',component:AddProductComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
