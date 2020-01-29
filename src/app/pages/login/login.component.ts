import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
  clickMessage = '';

  loginForm = this.fb.group({

    emailFormControl : [
      '',
      Validators.email,
    ],
    passwordFormControl : [
      '',
      Validators.required
    ]
  });

  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }


  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

}
