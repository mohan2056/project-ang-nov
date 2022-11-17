import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter : number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
