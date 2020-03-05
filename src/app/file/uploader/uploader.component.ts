import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { getClassNameForExtension } from 'font-awesome-filetypes';
import { getIconForExtension } from 'font-awesome-filetypes';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
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
  filename = 'foobar.docx';
  extension = this.filename.split('.').pop();

  className = 'fa ' + getClassNameForExtension(this.extension);
  icon = getIconForExtension(this.extension);

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
