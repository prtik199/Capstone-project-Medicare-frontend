import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /* userclass:UserClass=new UserClass() */

  constructor(private service:DataServiceService,private router:Router) { }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  
  users:UserClass[];

  ngOnInit(): void {
    this.service.getAllProduct().subscribe(result=>this.users=result);
  }

  /* BookDelete(id:number){
    this.service.deletePost(id);
    console.log("user deleted");  
  } */

 
  
}
