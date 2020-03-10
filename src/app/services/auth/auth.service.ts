import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: Observable<firebase.User>;
  public currentUserId: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.userData = afAuth.authState;
  }

  getCurrentUserEmail() {
    return this.afAuth.auth.currentUser.email;
  }

  getCurrentUserId() {
    return this.afAuth.auth.currentUser.uid;
  }

  isLoggedIn() {
    return this.afAuth.authState;
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
