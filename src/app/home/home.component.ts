import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

cars = [
  {
    brand:"VW", 
    year: "2015",
    img: "assets/img/car.jpg"
  },{ 
    brand:"VW", 
    year: "2015",
    img: "assets/img/car.jpg"
  },{ 
    brand:"VW", 
    year: "2015",
    img: "assets/img/car.jpg"
  },{ 
    brand:"VW", 
    year: "2015",
    img: "assets/img/car.jpg"
  },{ 
    brand:"VW", 
    year: "2015",
    img: "assets/img/car.jpg"
  },{ 
    brand:"VW", 
    year: "2015",
    img: "assets/img/car.jpg"
  },{ 
    brand:"VW", 
    year: "2015",
    img: "assets/img/car.jpg"
  }
];

  
  ngOnInit(){
  }

}