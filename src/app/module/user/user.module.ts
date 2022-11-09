import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../core/layout/layout.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    UserRoutingModule
  ]
})
export class UserModule { }
