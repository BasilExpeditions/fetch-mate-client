<<<<<<< HEAD
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as geofirex from 'geofirex';

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
export const geo = geofirex.init(firebase);
=======
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDaSgA8grdX3iJn7cTJ9jXkI4PqFKrszNk",
//   authDomain: "test1-57cd1.firebaseapp.com",
//   databaseURL: "https://test1-57cd1.firebaseio.com",
//   projectId: "test1-57cd1",
//   storageBucket: "test1-57cd1.appspot.com",
//   messagingSenderId: "514013619111",
//   appId: "1:514013619111:web:e8a41e821af57bcd56cc82",
//   measurementId: "G-C26N7B5N59",
// };
// firebase.initializeApp(firebaseConfig);
//
// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const initializeApp = firebase.initializeApp();
>>>>>>> 158f3fa47ca08a8ab2415af9c9f63e23ab1d1286
