import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Product } from '../product.interface';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  product: Product | undefined = {
    id : 0,
    pName : '',
    price : 0,
    qty : 0
  };

  id: any;
  constructor(private _ActivatedRoute : ActivatedRoute,
    private router : Router,
    private ps : ProductService
    ) { }
    sub: any ;
  ngOnInit(): void {
    this.sub = this._ActivatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      console.log(this.id);
      this.product = this.ps.getProduct(this.id);
      console.log(this.product);
    });
    
  }

}
