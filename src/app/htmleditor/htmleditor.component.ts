import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from '../services/user/user.service';
import User from '../model/user.model';
import Article from '../model/article.model';
import {HTMLArticleService} from '../services/htmlArticle/htmlarticle.service';
import { Observable } from 'rxjs';

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
  currentUser: User;
  isAdmin: Observable<boolean>;

  constructor(public userService: UserService, private articleService: HTMLArticleService){}

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null),
      'title': new FormControl(null)
    });
    this.userService.getCurrentUser().subscribe(user =>{
      this.currentUser = user;
    });
    this.isAdmin = this.userService.isAdmin();
  }


  onSubmit() {
    console.log(this.editorForm.get('title').value);
    const newArticle: Article = {
      title: this.editorForm.get('title').value,
      content: this.editorForm.get('editor').value
    };

    this.articleService.createArticle(newArticle);
  }

  showInfo() {
    console.log(this.currentUser.role);
  }

}
