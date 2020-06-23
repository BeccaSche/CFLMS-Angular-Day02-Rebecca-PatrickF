import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contact = new FormGroup({
    fullname: new FormControl('',Validators.required),
    carBrand: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitted: boolean = false;
  onSubmit() {
    if (this.contact.valid) {
      this.submitted = true;
    }
  }

}
