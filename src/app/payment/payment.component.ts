import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`])
  }
 
  

  ngOnInit(): void {
  }

  
}
