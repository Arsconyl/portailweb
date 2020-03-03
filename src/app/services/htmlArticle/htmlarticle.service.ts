import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Article from '../../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class HTMLArticleService {

  constructor(private firestore: AngularFirestore) { }

  createArticle(Article) {
    this.firestore.collection<Article>("articles").add(Article);
  }

  getArticles() {
    return this.firestore.collection<Article>("articles").snapshotChanges();
  }

  deleteArticle(ArticleID) {
    this.firestore.doc('articles/'+ ArticleID).delete();

  }
}
