import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {

  constructor(private router:Router) { }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
  }

}
