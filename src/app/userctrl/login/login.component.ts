import { Component } from '@angular/core';
import { Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform = this.fb.group({
    Email: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(14)])
    ],
    });
    constructor(private fb: FormBuilder,private router:Router) {}

    onSubmit(): void {
      alert('login successfull');
      console.log(this.loginform.value)
    }

}
