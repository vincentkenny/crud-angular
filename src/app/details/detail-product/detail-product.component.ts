import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/objects/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  fetchedProduct : any;
  modifiedProduct : Product = new Product("",null,null);
  message : any;


  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.getProductById(paramId);
    res.subscribe((data)=> this.fetchedProduct = data);
  }

  public updateProduct(){
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.updateProduct(paramId,this.modifiedProduct);
    res.subscribe((data)=> {this.message = data; this.ngOnInit()});
  }

  public deleteProduct(){
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.deleteProduct(paramId);
    res.subscribe((data)=> this.redirectToHome() );
  }

  public redirectToHome(){
    this.router.navigate(['products']);
  }

}
