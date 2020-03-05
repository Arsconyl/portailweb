import { Component, OnInit, Input } from '@angular/core';
import User from '../../model/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { forkJoin, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

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
  // currentUser: User;

  constructor(private userService: UserService) {
    // this.user = {
    //   firstName: 'Arnaud',
    //   lastName: 'Couderc',
    //   role: 'rôle',
    //   phone: '0123456789',
    //   email: 'exemple@email.com'
    // };

  }

  ngOnInit() {
    forkJoin(
      this.userService.isAdmin(),
      this.userService.isEmploye()
      // this.userService.getCurrentUser()
    )
      .subscribe(([admin, employe]) => {
        this.isAdmin = admin;
        this.isEmploye = employe;
        // this.currentUser = user;
      });
  }

  isEquals() {
    return (this.user.email == this.currentUser.email)
  }

}
