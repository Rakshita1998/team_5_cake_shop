import { Product } from "./product";

export class Cart {

id: number;
name: string;
imageUrl:string;
description: string;
prodprice: number;
prodweigth: number;
quantity:number;

constructor(product: Product){
  this.id=product.id;
  this.name = product.name;
  this.imageUrl = product.imageurl;
  this.description = product.description;
  this.prodprice = product.prodprice;
  this.prodweigth = product.prodweigth;
  this.quantity = 1;



}
}
