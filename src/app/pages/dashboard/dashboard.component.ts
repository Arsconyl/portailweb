import { Component, OnInit } from '@angular/core';
import User from '../../model/user.model';
import {UserService} from '../../services/user/user.service';
import {FileService} from '../../services/file/file.service';
import {forkJoin} from 'rxjs';
import {HTMLArticleService} from '../../services/htmlArticle/htmlarticle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  file: any = {};
  article: any = {};

  constructor(private userService: UserService, private fileService: FileService, private articleService: HTMLArticleService) {
  }

  ngOnInit() {
    // forkJoin(this.userService.getCurrentUser(),
    //   this.fileService.getAllFiles()).subscribe(([user, file]) => {
    //     this.currentUser = user;
    //     this.file = file[file.length - 1];
    // });
    this.fileService.getAllFiles().subscribe(files => {
      this.file = files[files.length - 1];
    });
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    this.articleService.getArticles().subscribe(articles => {
      this.article = articles[articles.length - 1];
    });
  }

}
