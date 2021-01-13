export class Purchase{
    productId : string;
    quantity : number;
    totalPrice : number;
    userId : string;
    
    constructor(productId:string, quantity:number,totalPrice:number,userId:string){
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.userId = userId;
    }
}