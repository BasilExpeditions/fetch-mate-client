import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaSgA8grdX3iJn7cTJ9jXkI4PqFKrszNk",
  authDomain: "test1-57cd1.firebaseapp.com",
  databaseURL: "https://test1-57cd1.firebaseio.com",
  projectId: "test1-57cd1",
  storageBucket: "test1-57cd1.appspot.com",
  messagingSenderId: "514013619111",
  appId: "1:514013619111:web:e8a41e821af57bcd56cc82",
  measurementId: "G-C26N7B5N59",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
