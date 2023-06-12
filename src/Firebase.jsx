import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCygbTL89-5TmTkq8uuKMdJFtamVxP3kVE",
    authDomain: "notesapp-99.firebaseapp.com",
    projectId: "notesapp-99",
    storageBucket: "notesapp-99.appspot.com",
    messagingSenderId: "508032488196",
    appId: "1:508032488196:web:f12c0de7a14acc3d927651",
    measurementId: "G-GJ94GCKVE3",
    databaseURL: "https://notesapp-99-default-rtdb.firebaseio.com"
  };
  
  export const app = initializeApp(firebaseConfig);