import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTtClass]'
})
export class TtClassDirective {

  @Input() ttClass : string | undefined;

  constructor(private el : ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.classList.add(this.ttClass);
  }

}
