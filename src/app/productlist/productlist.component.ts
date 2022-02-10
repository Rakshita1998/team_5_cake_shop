import { Component, OnInit } from '@angular/core';
import { Cart } from '../common/cart';
import { Product } from '../common/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products : Product[];
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {

     this.listProducts();
  }

  listProducts(){
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  addToCart(theProduct : Product)
  {
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.prodprice}`);

    const theCart = new Cart(theProduct);
    this.cartService.addToCart(theCart);
  }

}
