import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public collection:any;

  constructor(private commonService:CommonService,private router:Router,private route:ActivatedRoute) { }

  //ordernow btn event handler
  onLoadOrder(){
    this.router.navigate(['/register'])
  }

  ngOnInit(): void {
    this.commonService.getHome().subscribe((result)=>{
      this.collection= result;
      console.log("this is working");
    });

  }

}
