import { ProductService } from './product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from './product.interface';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(@Inject(ProductService) private ps : any){};
  products : Product[] = [];
  title : string = 'project-ang-nov';
  todayDate : Date = new Date();
  userName : string = "MohanKrishna";
  salary : number = 500;
  posts : any [] = [];

  
  ngOnInit(): void {
    this.products = this.ps.getProducts();
    console.log(this.products);

    this.ps.getPosts().subscribe(
      (data: any[]) => {
      this.posts = data;
      console.log(this.posts);
      },
      (error: any) => console.log(error));
    
  }
  
}
