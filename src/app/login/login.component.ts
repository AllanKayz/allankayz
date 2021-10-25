import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter your email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() {}

  ngOnInit(): void {}
}
