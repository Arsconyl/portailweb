import {Component, Input, OnInit} from '@angular/core';
import Article from '../model/article.model';

@Component({
  selector: 'app-htmlsinglearticle',
  templateUrl: './htmlsinglearticle.component.html',
  styleUrls: ['./htmlsinglearticle.component.scss']
})
export class HtmlsinglearticleComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

}
