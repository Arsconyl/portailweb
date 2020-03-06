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
  onModif: boolean = false;
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
    if (this.onModif) {
      this.onModif = false;
    } else {
      this.onModif = true;
    }
  }

}
