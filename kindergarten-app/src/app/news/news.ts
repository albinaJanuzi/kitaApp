import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class NewsComponent {
  
  newsList: any[] = [];

  constructor(private firestore: Firestore) {
    const ref = collection(this.firestore, 'news');
    collectionData(ref).subscribe(data => {
      this.newsList = data;
    });
  }

  addNews(title: string, text: string) {
    const ref = collection(this.firestore, 'news');
    addDoc(ref, {
      title: title,
      text: text,
      date: new Date() 
    });
  }

}
