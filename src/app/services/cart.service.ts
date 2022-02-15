import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../common/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Cart[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
    this.cartItems = [];
  }

  addToCart(theCart: Cart) {


    let alreadyExistInCart: boolean = false;
    let existingCart: Cart = undefined;
 //it check items is present or not
    if (this.cartItems.length > 0) {
      // find item in card base on card id
      for (let tempcart of this.cartItems) {
        if (tempcart.id === theCart.id) {
          existingCart = tempcart;
          break;
        }
      }

      alreadyExistInCart = (existingCart != undefined);
    }
    this.cartItems.push(theCart);
    console.log(this.cartItems);

    // compute the cart total price and total quantity
    this.computeCartTotals();
  }
  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCart of this.cartItems) {
      totalPriceValue += currentCart.quantity * currentCart.prodprice;
      totalQuantityValue += currentCart.quantity;
    }
    //new values
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('content of the cart');
    for (let tempcart of this.cartItems) {
      let subTotalPrice = tempcart.prodprice * tempcart.prodprice;
      console.log(`name: ${tempcart.name}, quantity=${tempcart.quantity},
       productPrice=${tempcart.prodprice}, subtotalPrice= ${subTotalPrice}`);
    }
    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);

  }
  //for decrement quatity------------------------
  decrementQuantity(theCart: Cart) {
    theCart.quantity--;


  }
}





