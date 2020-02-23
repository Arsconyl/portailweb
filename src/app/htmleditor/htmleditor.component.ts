import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-htmleditor',
  templateUrl: './htmleditor.component.html',
  styleUrls: ['./htmleditor.component.scss']
})
export class HtmleditorComponent implements OnInit {

  editorForm: FormGroup;
  editorStyle = {
    height: '300px'
  };

  editorContent: String;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });
  }

  printOutput() {
    this.editorContent = this.editorForm.get('editor').value;
  }

  onSubmit() {

    console.log(this.auth.getCurrentUserEmail());

  }

}
