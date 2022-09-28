import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-disable-product',
  templateUrl: './disable-product.component.html',
  styleUrls: ['./disable-product.component.css']
})
export class DisableProductComponent implements OnInit {

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }

  user = {
    id: ''
    /* name: '',
    description:'',
    quantity: '',
    price: '' */
  };  
  //user:UserClass;

   isBookAdded = false;

  // Add New
  delete(): void {

    const data = {
      id: this.user.id,
      /* name: this.user.name,
      description: this.user.description,
      quantity: this.user.quantity,
      price:this.user.price */
    };
    

   /*  this.service.deletePost(data); */
       
  }
  
}
