import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { News } from '../models/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class NewsComponent {
  
  newsList: News[] = [];

  constructor(private firestore: Firestore) {
    const ref = collection(this.firestore, 'news');
    collectionData(ref).subscribe(data => {
      this.newsList = data as News[];
    });
  }

  addNews(title: string, text: string) {
    const ref = collection(this.firestore, 'news');
    
    const news: News = {
      title,
      text,
      date: new Date()
    };

    addDoc(ref, news);
  }

}
