import React, { Component } from "react";
import { auth, firestore } from "../../firebase/firebase";

  const storageRef = firebase.storage().ref();
  const usersRef = storageRef.child(users);
  const userRef = usersRef.child();


  const UploadImage = async (e) => {
    e.preventDefault(); // when form is submitted, stop from refreshing
    const { uid, photoURL } = auth.currentUser;
    // Create new document in firestore
    await imageRef.add({
      text: formValue,
      createdAt: firebase.firestore.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
