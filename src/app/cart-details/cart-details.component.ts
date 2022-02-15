import { Component, OnInit } from '@angular/core';
import { Cart } from '../common/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  //properties
  cartItems: Cart[] = [];//for cart items empty array
  totalPrice: number = 0;
  totalQuantity: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    //cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    //cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.cartService.computeCartTotals();
  }


  ///for increment quantity-----------------------------
  incrementQuantity(theCart: Cart) {
    this.cartService.addToCart(theCart);
  }

  //for decrement quantity--------------------------
  decrementQuantity(theCart: Cart) {
    this.cartService.decrementQuantity(theCart);
  }

}
