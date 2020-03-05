import { Component, OnInit, Input } from '@angular/core';
import File from 'src/app/model/file.model';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {
  @Input() file: File;

  constructor() { }

  ngOnInit() {
  }

}
