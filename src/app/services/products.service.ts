import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public registerProduct(product){
    return this.http.post("http://localhost:8080/api/v1/products",product,{responseType: 'text' as 'json'})
  }
  public getProducts(){
    return this.http.get("http://localhost:8080/api/v1/products");
  }
  public getProductById(id){
    return this.http.get("http://localhost:8080/api/v1/products/"+id);
  }
}
