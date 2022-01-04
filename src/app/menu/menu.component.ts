import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  onLoadAllcake()
  {
     this.router.navigate(['/allcake']);
  }

  onLoadpineapple(){
    this.router.navigate(['/pineapple']);
  }
  ngOnInit(): void {

  }

}
