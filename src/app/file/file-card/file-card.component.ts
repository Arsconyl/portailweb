import { Component, OnInit, Input } from '@angular/core';
import File from 'src/app/model/file.model';
import { getIconForExtension } from 'font-awesome-filetypes';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {
  @Input() file: File;
  icon: any;

  constructor() { }

  ngOnInit() {
    this.icon = getIconForExtension(this.file.name.split('.').pop());
  }

  openUrl() {
    window.open(this.file.url);
  }

}
