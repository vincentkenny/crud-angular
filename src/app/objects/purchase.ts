export class Purchase{
    productId : string;
    quantity : number;
    userId : string;
    
    constructor(productId:string, quantity:number,userId:string){
        this.productId = productId;
        this.quantity = quantity;
        this.userId = userId;
    }
}