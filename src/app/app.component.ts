import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './services/user/user.service';
import User from './model/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portailweb';

  constructor() {
  }

  ngOnInit(): void {
  }

}
