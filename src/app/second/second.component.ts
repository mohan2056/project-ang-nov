import { Component, 
  OnInit,
  } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log("on Init");
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
  contactForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    gender : new FormControl(),
    isMarried : new FormControl(),
    country : new FormControl(),
    address : new FormGroup({
      state : new FormControl(),
      city : new FormControl(),
      pincode : new FormControl()
    })
  });

  onSubmit(){
    console.log(this.contactForm.value);
  }
}
