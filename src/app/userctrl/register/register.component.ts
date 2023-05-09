import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationform = this.fb.group({
    school: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    Email: [null, Validators.required],
    address: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(14)])
    ],
    });

  hasUnitNumber = false;

  states = [
    {name: 'Andhra Pradesh', abbreviation: 'AP'},
    {name: 'Arunachal Pradesh', abbreviation: 'AR'},
    {name: 'Assam', abbreviation: 'AS'},
    {name: 'Bihar', abbreviation: 'BR'},
    {name: 'Chhattisgarh', abbreviation: 'CG'},
    {name: 'Goa', abbreviation: 'GA'},
    {name: 'Gujarat', abbreviation: 'GJ'},
    {name: 'Haryana', abbreviation: 'HR'},
    {name: 'Himachal Pradesh', abbreviation: 'HP'},
    {name: 'Jharkhand', abbreviation: 'JH'},
    {name: 'Karnataka', abbreviation: 'KA'},
    {name: 'Kerala', abbreviation: 'KL'},
    {name: 'Madhya Pradesh', abbreviation: 'MP'},
    {name: 'Maharashtra', abbreviation: 'MH'},
    {name: 'Manipur', abbreviation: 'MN'},
    {name: 'Meghalaya', abbreviation: 'ML'},
    {name: 'Mizoram', abbreviation: 'MZ'},
    {name: 'Nagaland', abbreviation: 'NL'},
    {name: 'Odisha', abbreviation: 'OD'},
    {name: 'Punjab', abbreviation: 'PB'},
    {name: 'Rajasthan', abbreviation: 'RJ'},
    {name: 'Sikkim', abbreviation: 'SK'},
    {name: 'Tamil Nadu', abbreviation: 'TN'},
    {name: 'Telangana', abbreviation: 'TG'},
    {name: 'Tripura', abbreviation: 'TR'},
    {name: 'Uttar Pradesh', abbreviation: 'UP'},
    {name: 'Uttarakhand', abbreviation: 'UK'},
    {name: 'West Bengal', abbreviation: 'WB'}
    ];

  constructor(private fb: FormBuilder,private router:Router) {}

  onSubmit(): void {
    alert(JSON.stringify(this.registrationform.value));
    console.log(this.registrationform.value)
  }
}
