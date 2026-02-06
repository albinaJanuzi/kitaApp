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
    const newsRef = collection(this.firestore, 'news');
  collectionData(newsRef).subscribe({
  next: (data) => {
    this.newsList = data as News[];
  },
  error: (err) => {
    console.error("Firestore read error:", err);
  }
});
  }

  addNews(title: string, text: string) {
    console.log('Adding news:', title, text);
    const ref = collection(this.firestore, 'news');
    
    const news: News = {
      title,
      text,
      date: new Date()
    };

    addDoc(ref, news)
     .then(() => console.log("Saved to Firestore"))
    .catch((err:any) => console.error("Firestore error:", err));
  }

}
