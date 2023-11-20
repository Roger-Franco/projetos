// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDEj3fbUJxi11Scc5RJ3Z8BLh7nsnR1qO8",
//   authDomain: "admin-template-f1413.firebaseapp.com",
//   projectId: "admin-template-f1413",
//   storageBucket: "admin-template-f1413.appspot.com",
//   messagingSenderId: "4399994662",
//   appId: "1:4399994662:web:0575838c36655688eb13e7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

/* ======================= */

import firebase from "firebase/app";
import 'firebase/auth'

if(!firebase.apps.length) {
  firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase;
