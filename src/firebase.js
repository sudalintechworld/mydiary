// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBs9_bichceCxuhATPwguotqlU6BnCTsI",
  authDomain: "my-style-diary.firebaseapp.com",
  projectId: "my-style-diary",
  storageBucket: "my-style-diary.appspot.com",
  messagingSenderId: "948386304182",
  appId: "1:948386304182:web:efa97d0092803bcc9f5617",
  measurementId: "G-BV9TYDFN60"
};
initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);


export const db = getFirestore();