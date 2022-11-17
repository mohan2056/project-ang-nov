import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input('MyChild')  // Aliasing input property 
  count!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for(let property in changes){
      console.log('Previous', changes[property].previousValue);
      console.log('Current', changes[property].currentValue);
      console.log('First Change',changes[property].firstChange);
    }
  }

  ngOnInit(): void {
  }

}
