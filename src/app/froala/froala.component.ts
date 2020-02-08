import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-froala',
  templateUrl: './froala.component.html',
  styleUrls: ['./froala.component.scss']
})
export class FroalaComponent implements OnInit {

  public editorContent: string;
  constructor() { }

  ngOnInit() {
  }

}
