import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
    {
      id : 1,
      pName : "Item1",
      price : 2000,
      qty : 20
    },
    {
      id : 2,
      pName : "Item2",
      price : 1000,
      qty : 30
    },
    {
      id : 3,
      pName : "Item3",
      price : 2500,
      qty : 40
    }
  ];

  posts : any[] = [];

  constructor(public http : HttpClient) { }

  public getProducts(){
    return this.products;
  }
  
  public getProduct(id: number){
    return this.products.find(p => p.id == id);
  }

  // public getPosts(){
  //     this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe(data => {
  //       this.posts = data;
  //       console.log(this.posts);
  //     },
  //     err => console.log(err)
  //     );
  // }

  public getPosts(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
}
