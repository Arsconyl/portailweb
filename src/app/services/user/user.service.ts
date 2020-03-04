import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of } from 'rxjs';
import User from '../../model/user.model';
import {AuthService} from '../auth/auth.service';
import { switchMap, map, take, tap} from 'rxjs/operators';
import { UserCardComponent } from 'src/app/layout/user-card/user-card.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private afs: AngularFirestore, private authService: AuthService) {
   }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  public getCurrentUser(): Observable<User> {
    // return  this.afs.collection<User>('users', ref => ref.where('email', '==', this.authService.getCurrentUserEmail())).valueChanges();
   return  this.afs.doc<User>(`users/${this.authService.getCurrentUserId()}`).valueChanges().pipe(take(1));
  }

  public isAdmin(): Observable<boolean> {

    return this.getCurrentUser().pipe(map(user => user.role === 'admin'));
  }

  public getRole(): string {
    let temp: User = {} as any;
    this.getCurrentUser().subscribe(user => {
      temp = user;
    });
    return temp.role;
  }

}
