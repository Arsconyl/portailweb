import { Component, OnInit, Input } from '@angular/core';
import User from '../../model/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { forkJoin, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {EditUserComponent} from '../../edit-user/edit-user.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Input() currentUser: User;
  isAdmin: boolean;
  isEmploye: boolean;
  onModif = false;

  constructor(private userService: UserService, public dialog: MatDialog) {

  }

  ngOnInit() {
    forkJoin(
      this.userService.isAdmin(),
      this.userService.isEmploye()
    )
      .subscribe(([admin, employe]) => {
        this.isAdmin = admin;
        this.isEmploye = employe;
      });
  }

  isCurrentUser() {
    return (this.user.email === this.currentUser.email);
  }

  modification() {
    const dialogRef = this.dialog.open(EditUserComponent, {
      // data: this.user
      data: {email: this.user.email,
        phone: this.user.phone,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        role: this.user.role}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed');
        this.user = result;
        this.userService.editUser(this.user);
      }

    });
  }

}
