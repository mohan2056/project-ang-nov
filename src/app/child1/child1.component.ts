import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  count!: number;

  @Output() countChanged : EventEmitter <number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }

}
