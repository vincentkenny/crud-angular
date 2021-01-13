import { Component, OnInit } from '@angular/core';
import { Product } from '../objects/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = new Product("",null,null);
  message : any;

  listProduct : any;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    let res = this.service.getProducts();
    res.subscribe((data)=> this.listProduct = data);
  }

  public registerProduct(){
    let res = this.service.registerProduct(this.product);
    res.subscribe((data)=> this.message = data);
  }

}
