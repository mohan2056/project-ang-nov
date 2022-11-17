import { ProductService } from './product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(@Inject(ProductService) private ps : any){};
  products : Product[] = [];
  ngOnInit(): void {
    this.products = this.ps.getProducts();
    console.log(this.products)
  }
  title : string = 'project-ang-nov';
  todayDate : Date = new Date();
  userName : string = "MohanKrishna";
  salary : number = 500;

  
  
}
