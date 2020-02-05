import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import User from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

}
