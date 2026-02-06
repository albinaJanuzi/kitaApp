import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDqur7BXJoORvs9yyaA7_ZllmIx1-Volw4",
      authDomain: "kindergarten-test-2ff31.firebaseapp.com",
      projectId: "kindergarten-test-2ff31",
      storageBucket: "kindergarten-test-2ff31.firebasestorage.app",
      messagingSenderId: "115138355953",
      appId: "1:115138355953:web:64d622b911b34b2cdf7f50"
    })),

    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
};
