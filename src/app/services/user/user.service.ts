import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of } from 'rxjs';
import User from '../../model/user.model';
import {AuthService} from '../auth/auth.service';
import { switchMap, map, take, tap, first} from 'rxjs/operators';
import { UserCardComponent } from 'src/app/layout/user-card/user-card.component';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private afs: AngularFirestore, private authService: AuthService, private afAuth: AngularFireAuth) {
   }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  public getCurrentUser(): Observable<User> {
    // return  this.afs.doc<User>(`users/${this.authService.getCurrentUserId()}`).valueChanges().pipe(take(1));
    return  this.afs.doc<User>(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges().pipe(take(1));
  }

  public isClient(): Observable<boolean> {
    return this.getCurrentUser().pipe(map(user => user.role === 'client'));
  }

  public isEmploye(): Observable<boolean> {
    return this.getCurrentUser().pipe(map(user => user.role === 'employe'));
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
