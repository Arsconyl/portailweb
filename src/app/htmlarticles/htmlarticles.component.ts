import { Component, OnInit } from '@angular/core';
import { HTMLArticleService } from '../services/htmlArticle/htmlarticle.service';
import Article from '../model/article.model';

@Component({
  selector: 'app-htmlarticles',
  templateUrl: './htmlarticles.component.html',
  styleUrls: ['./htmlarticles.component.scss']
})
export class HtmlarticlesComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: HTMLArticleService) {
    this.articles = [];
   }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

}
