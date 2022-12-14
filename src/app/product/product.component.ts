import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.products =  this.productService.getProducts();
  }

}
