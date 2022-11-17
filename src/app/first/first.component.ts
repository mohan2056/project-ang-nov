import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countryList = [{
    id : 1,
    name : 'India'
  },
  {
    id : 2,
    name : 'USA'
  }
  ];
  
  onSubmit(contactForm: any){
    console.log(contactForm.value);
  }
}
