import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  counter = 5;
  constructor() { }

  ngOnInit(): void {
  }
  countChangehandler(count : number){
    this.counter = count;
    console.log(count);
  }

}
