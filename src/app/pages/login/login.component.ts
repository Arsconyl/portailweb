import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
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
  loginForm: FormGroup;



  matcher = new MyErrorStateMatcher();
  constructor() {
    this.loginForm = new FormGroup({
      email : new FormControl('', Validators.compose([Validators.email, Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]))
    });

  }

  ngOnInit() {
  }


  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onSubmit() {
    console.warn(this.loginForm.value)
  }

}
