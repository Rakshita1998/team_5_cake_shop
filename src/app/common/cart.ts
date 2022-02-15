import { Product } from "./product";

export class Cart {

id: string;
name: string;
imageUrl:string;
prodprice: number;

quantity:number;

constructor(product: Product){
  this.id=product.id;
  this.name = product.name;
  this.imageUrl = product.imageurl;
  this.prodprice = product.prodprice;

  this.quantity = 1;



}
}
