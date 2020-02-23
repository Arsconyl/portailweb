import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              private router: Router) {
    this.loginForm = new FormGroup({
      email : new FormControl('', Validators.compose([Validators.email, Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]))
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.login(email, password).then(
      () => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}

