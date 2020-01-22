import { Injectable } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Injectable()
export class UserService {
  private users = [
    {
      firstName: 'Arnaud',
      lastName: 'Couderc',
      role: 'rôle',
      phone: '0123456789',
      email: 'exemple@email.com'
    },
    {
      firstName: 'Alexandre',
      lastName: 'Ludwig',
      role: 'rôle',
      phone: '0123456789',
      email: 'exemple@email.com'
    }
  ];

  emitPosts() {
    return this.users;
  }
}
