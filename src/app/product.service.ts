import { Injectable } from '@angular/core';
import { Product } from './product.interface';

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

  constructor() { }

  public getProducts(){
    return this.products;
  }
}
