import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import User from '../../model/user.model';

@Component({
  selector: 'app-trombinoscope',
  templateUrl: './trombinoscope.component.html',
  styleUrls: ['./trombinoscope.component.scss']
})
export class TrombinoscopeComponent implements OnInit {
  users: User[];
  currentUser: User = {} as any;

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });



  }

}
