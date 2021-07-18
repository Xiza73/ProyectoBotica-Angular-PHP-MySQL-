import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  loginForm: FormGroup;
  errorMessage: any;

  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required ]]
    });
  }

  ngOnInit(): void {
  }

  showPassword(): void {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    // this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
    console.log('LOGIN');
    
  }

}
