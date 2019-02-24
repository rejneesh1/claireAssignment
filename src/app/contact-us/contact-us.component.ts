import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  states=[
      'Karnataka',
      'Andhra Pradesh',
      'Tamil Nadu',
      'Kerala',
      'Telangana'
    ]

  constructor() { 
  }

  ngOnInit() {
  }
  

  onSubmit(form){
    console.log(form);
  }

}
