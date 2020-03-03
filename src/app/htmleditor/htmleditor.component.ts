import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from '../services/user/user.service';
import User from '../model/user.model';
import Article from '../model/article.model';
import {HTMLArticleService} from '../services/htmlArticle/htmlarticle.service';

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

  constructor(public user: UserService, private articleService: HTMLArticleService){}

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null),
      'title': new FormControl(null)
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
    console.log(this.editorForm.get('title').value);
    const newArticle: Article = {
      title: this.editorForm.get('title').value,
      content: this.editorForm.get('editor').value
    };

    //let newArticle = new Article(this.editorForm.get('title').value, this.editorForm.get('editor').value);
    this.articleService.createArticle(newArticle);
  }
}
