import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

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

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
