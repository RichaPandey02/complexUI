import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-costofcare',
  templateUrl: './costofcare.component.html',
  styleUrls: ['./costofcare.component.scss']
})
export class CostofcareComponent implements OnInit {
  Fullname=new FormControl('',[Validators.required]);
  contactForm:FormGroup
  constructor(private fb: FormBuilder) {
    this.contactForm=this.fb.group(
      {
    Fullname:this.Fullname,

      }
    )

  }

 ngOnInit(): void {
 }
  age:number
  isShow=true
  onInput(value) {
    this.age = value;
    console.log(this.age)
    if(this.age>=75 || this.age<=29)
    {
      this.isShow=false
    }
    else{
      this.isShow=true

    }
   }

}
