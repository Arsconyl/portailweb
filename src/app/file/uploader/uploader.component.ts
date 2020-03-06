import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FileService } from 'src/app/services/file/file.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  isHovering: boolean;
  documents: any[] = [];

  files: File[] = [];

  isAllowed: boolean;

  constructor(private storage: AngularFireStorage, private fileService: FileService, private userService: UserService) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  ngOnInit() {
    this.fileService.getAllFiles().subscribe(docs => {
      this.documents = docs;
    });

    this.userService.isClient().subscribe(isClient => {
      this.isAllowed = !isClient;
    });
  }
}
