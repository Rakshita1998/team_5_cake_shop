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
  totalPrice: number=0;
  totalQuantity: number =0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
   this.cartItems = this.cartService.cartItems;

   this.cartService.totalPrice.subscribe(
     data => this.totalPrice = data
     );

     this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
      );

   this.cartService.computeCartTotals();
  }

}