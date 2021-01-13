import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient) { }

  public registerPurchase(purchase){
    return this.http.post("http://localhost:8080/api/v1/purchases", purchase, {responseType : 'text' as 'json'});
  }

  public getAllPurchase(){
    return this.http.get("http://localhost:8080/api/v1/purchases");
  }
  
  public getPurchaseById(id){
    return this.http.get("http://localhost:8080/api/v1/purchases/"+id);
  }
  
  public updatePurchase(id,purchase){
    return this.http.put("http://localhost:8080/api/v1/purchases/"+id, purchase, {responseType: 'text' as 'json'});
  }

  public deletePurchase(id){
    return this.http.delete("http://localhost:8080/api/v1/purchases/"+id);
  }
}
