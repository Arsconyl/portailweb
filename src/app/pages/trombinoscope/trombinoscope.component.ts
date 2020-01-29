import { Component, OnInit } from '@angular/core';
import User from '../../model/user.model';
import {USER} from '../../_static/people';

@Component({
  selector: 'app-trombinoscope',
  templateUrl: './trombinoscope.component.html',
  styleUrls: ['./trombinoscope.component.scss']
})
export class TrombinoscopeComponent implements OnInit {
  users: any;

  constructor() {
    this.users = USER;
  }

  ngOnInit() {
  }

}
