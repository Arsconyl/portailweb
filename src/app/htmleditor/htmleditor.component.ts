import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from '../services/user/user.service';
import User from '../model/user.model';

@Component({
  selector: 'app-htmleditor',
  templateUrl: './htmleditor.component.html',
  styleUrls: ['./htmleditor.component.scss']
})
export class HtmleditorComponent implements OnInit {


  users: User[];
  currentUser: User;
  editorForm: FormGroup;
  editorStyle = {
    height: '300px'
  };

  editorContent: String;

  constructor(public user: UserService) {}

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });
    this.user.getCurrentUser().subscribe(users => {
      this.users = users;
    });
    this.currentUser = this.users[0];
  }

  printOutput() {
    this.editorContent = this.editorForm.get('editor').value;
  }

  onSubmit() {
    console.log( this.user.getCurrentUser());
  }
}
