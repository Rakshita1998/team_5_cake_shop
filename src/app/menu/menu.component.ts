import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products : Product[];
  currentCategoryId: number;

  constructor(private router:Router,private route:ActivatedRoute , private productService : ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    });

  }
  listProducts(){

  }
  // onLoadpineapple(){
  //   this.router.navigate(['/pineapple']);
  // }

  // onLoadchocolate(){
  //   this.router.navigate(['/chocolate']);
  // }

  // onLoadredvelvet(){
  //   this.router.navigate(['/redvelvet']);
  // }

  // onLoadblackforest(){
  //   this.router.navigate(['/blackforest']);
  // }
//--------------------------------------------------------------------



}
