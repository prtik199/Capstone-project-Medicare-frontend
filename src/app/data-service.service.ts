import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserClass } from './UserClass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url:string="http://localhost:8082/api/Product/";

//inject the DI
  constructor(private http:HttpClient) { }

    getAllProduct(): Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url)
  }

  /* addproductToRemote(): Observable<UserClass[]>{
    console.log("Hi Boss");
    return this.http.post<UserClass[]>("http://localhost:8082/addProduct",UserClass); */

    //post
    create(data: any): Observable<any> {
    return this.http.post(this.url, data)
  }

  //delete user by id
  deletePost(id:number) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(data => {
       return this.getAllProduct();
    });
  }

}

