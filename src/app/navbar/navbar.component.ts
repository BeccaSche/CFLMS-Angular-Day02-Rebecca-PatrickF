import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  donationValue: number = 10;
  clickCounter: number = 1;

  clickCount() {
    this.donationValue = 10 * ++this.clickCounter;
  }

  ngOnInit(): void {
  }

}
