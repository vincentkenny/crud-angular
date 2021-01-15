import { Component, OnInit } from '@angular/core';
import { Purchase } from '../objects/purchase';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchase : Purchase = new Purchase("",null,"");
  message : any;
  listPurchase : any;

  constructor(private service: PurchaseService) { }

  ngOnInit(): void {
    let res = this.service.getAllPurchase();
    res.subscribe((data) => this.listPurchase = data);
  }

  public registerPurchase(){
    let res = this.service.registerPurchase(this.purchase);
    res.subscribe((data) => {this.message = data; this.ngOnInit();});
  }

}
