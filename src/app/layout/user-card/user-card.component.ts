import { Component, OnInit, Input } from '@angular/core';
import User from '../../model/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor() {
    // this.user = {
    //   firstName: 'Arnaud',
    //   lastName: 'Couderc',
    //   role: 'rôle',
    //   phone: '0123456789',
    //   email: 'exemple@email.com'
    // };
  }

  ngOnInit() {
  }

}