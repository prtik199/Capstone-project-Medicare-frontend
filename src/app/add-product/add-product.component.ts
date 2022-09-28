import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

   // user:UserClass[];

  constructor(private service:DataServiceService,private route:Router) { }

  ngOnInit(): void {
  }
   user = {
    id: '',
    name: '',
    description:'',
    quantity: '',
    price: ''
  }; 
  //user:UserClass;

   isBookAdded = false;

  // Add New
  addBook(): void {

    const data = {
      id: this.user.id,
      name: this.user.name,
      description: this.user.description,
      quantity: this.user.quantity,
      price:this.user.price
    };
    if (!data.name) {
      alert('Please add title!');
      return;
    }

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
          
        },
        error => {
          console.log(error);
        });
  }
 
}
