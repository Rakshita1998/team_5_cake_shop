import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  onLoadHome()
  {
    this.router.navigate(['/home']);
  }
  onLoadMenu()
  {
    this.router.navigate(['/menu']);
  }

  onLoadCart()
  {
    this.router.navigate(['/cart']);
  }

  onLoadContact()
  {
    this.router.navigate(['/contact']);
  }

  onLoadFeedback()
  {
    this.router.navigate(['/feedback']);
  }




  ngOnInit(): void {
  }

}
