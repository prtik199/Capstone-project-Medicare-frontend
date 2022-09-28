import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private service:DataServiceService) { }

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
          
        }); 
  }
}
