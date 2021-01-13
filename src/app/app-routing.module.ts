import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users/users.component';
import { PurchasesComponent } from './purchases/purchases/purchases.component';
import { DetailProductComponent } from './details/detail-product/detail-product.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: DetailProductComponent},
  {path: 'purchases', component: PurchasesComponent },
  {path: 'users', component: UsersComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
