import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { DetailProductComponent } from './details/detail-product/detail-product.component';
import { DetailUserComponent } from './details/detail-user/detail-user.component';
import { DetailPurchaseComponent } from './details/detail-purchase/detail-purchase.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: DetailProductComponent},
  {path: 'users', component: UsersComponent}, 
  {path: 'users/:id', component: DetailUserComponent},
  {path: 'purchases', component: PurchasesComponent },
  {path: 'purchases/:id', component: DetailPurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
