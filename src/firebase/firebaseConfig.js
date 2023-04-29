// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvqjeGwrjSwIfaaErSgLA6YmI4O4Rz4GY",
  authDomain: "the-news-dragon-client-232b4.firebaseapp.com",
  projectId: "the-news-dragon-client-232b4",
  storageBucket: "the-news-dragon-client-232b4.appspot.com",
  messagingSenderId: "19007924427",
  appId: "1:19007924427:web:626e63d3a2c91d66e3534e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;