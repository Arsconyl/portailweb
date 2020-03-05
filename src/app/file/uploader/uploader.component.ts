import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FileService } from 'src/app/services/file/file.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  isHovering: boolean;
  documents: any[] = [];

  files: File[] = [];

  constructor(private storage: AngularFireStorage, private fileService: FileService) { }

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
  }
}
