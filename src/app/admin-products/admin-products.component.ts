import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(private service:DataServiceService,private router:Router) { }

users:UserClass[];

  ngOnInit(): void {
    this.service.getAllProduct().subscribe(results=>this.users=results)
  }
  goToPage(pageName:any){
    this.router.navigate([`${pageName}`])
  }

  goTo(){
    this.router.navigate(['updateProduct'])
  }

  go(){
    this.router.navigate(['disableProduct'])
  }

}
