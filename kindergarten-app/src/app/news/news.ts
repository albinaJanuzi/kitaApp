import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { News } from '../models/news.model';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class NewsComponent {
  
  newsList: News[] = [];

constructor(
  private firestore: Firestore,
  private auth: Auth,
  private router: Router
) {
  const newsRef = collection(this.firestore, 'news');
  collectionData(newsRef).subscribe(data => {
    this.newsList = data as News[];
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
  
  logout() {
  signOut(this.auth).then(() => {
    this.router.navigate(['/login']);
  });
}
}
