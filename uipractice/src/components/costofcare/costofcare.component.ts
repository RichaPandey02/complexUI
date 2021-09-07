import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'


@Component({
  selector: 'app-costofcare',
  templateUrl: './costofcare.component.html',
  styleUrls: ['./costofcare.component.css']
})
export class CostofcareComponent implements OnInit {
  age
  isShow=true
  OnInput(value) {
    this.age = value;
    console.log(this.age)
    if(this.age>=75 || this.age<=20)
    {
      this.isShow=false
    }
    else{
      this.isShow=true

    }
   }
  constructor() {

   }

  ngOnInit(): void {
  }
}
