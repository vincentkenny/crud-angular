import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/objects/purchase';

@Component({
  selector: 'app-detail-purchase',
  templateUrl: './detail-purchase.component.html',
  styleUrls: ['./detail-purchase.component.css']
})
export class DetailPurchaseComponent implements OnInit {

  constructor(private service:PurchaseService, private activatedRoute: ActivatedRoute,
    private router : Router) { }

    fetchedPurchase : any;
    modifiedPurchase : Purchase = new Purchase("",null,"");
    message: any;

  ngOnInit(): void {
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.getPurchaseById(paramId);
    res.subscribe((data)=> this.fetchedPurchase = data);
  }

  public updatePurchase(){
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.updatePurchase(paramId, this.modifiedPurchase);
    res.subscribe((data) => {this.ngOnInit();});
  }
  public deletePurchase(){
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.deletePurchase(paramId);
    res.subscribe((data)=> this.router.navigate(['purchases']));
  }


}
