// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOZCvM6b1BGinwhwmyi7hBTd7KtCb-b3M",
  authDomain: "meetdaslaniya-7e901.firebaseapp.com",
  projectId: "meetdaslaniya-7e901",
  storageBucket: "meetdaslaniya-7e901.appspot.com",
  messagingSenderId: "989537067518",
  appId: "1:989537067518:web:141252b0e073d707fd60af",
  databaseURL:"https://meetdaslaniya-7e901-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)