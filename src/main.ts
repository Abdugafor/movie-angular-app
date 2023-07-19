import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyB38ELrgj1BrOV-StlGiGMnx9TDHABkQEA",
  authDomain: "lernardmovies.firebaseapp.com",
  projectId: "lernardmovies",
  storageBucket: "lernardmovies.appspot.com",
  messagingSenderId: "710348925354",
  appId: "1:710348925354:web:b3c2cb3edf1ca2d73c63d3",
  measurementId: "G-3QYEN6MRPR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
