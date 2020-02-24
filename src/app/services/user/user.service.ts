import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import User from '../../model/user.model';
import {AuthService} from '../auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private afs: AngularFirestore, private authService: AuthService) {
   }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  public getCurrentUser()  {
    return  this.afs.collection<User>('users', ref => ref.where('email', '==', this.authService.getCurrentUserEmail())).valueChanges();
  }

}
