import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import File from 'src/app/model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private afs: AngularFirestore, private db: AngularFirestore) {
  }

  public getAllFiles(): Observable<File[]> {
    return this.afs.collection<File>('files').valueChanges();
  }

  public addFile(file: File) {
    this.db.collection('files').add(file);
  }

}
