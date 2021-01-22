import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { DetailProductComponent } from './details/detail-product/detail-product.component';
import { DetailUserComponent } from './details/detail-user/detail-user.component';
import { DetailPurchaseComponent } from './details/detail-purchase/detail-purchase.component';
import { SecurityComponent } from './security/security.component';
import { AuthInterceptor } from './services/auth.interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    UsersComponent,
    PurchasesComponent,
    DetailProductComponent,
    DetailUserComponent,
    DetailPurchaseComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
