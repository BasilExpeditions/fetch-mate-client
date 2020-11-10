// Chat main - chat function, render message, create new chat
// Chat body - user to user chat
// Chat input - Form, onclick button send realtime message
// Display new/old messages on realtime
// Display notification icon

import { useState, useRef } from "react";

import React from "react";
import "../../App.css";

import firebase from "firebase/app";

import { auth, firestore } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebaseConfig from '../../firebase/firebase';

function Chat() {
  const [user] = useAuthState(auth); // show button to sign in. Signed in, user is an object. Signed out, user is null
  return (
    <div className="App">
      <header>
        <h1>Fetch Chatmate</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />} // if user is logging in, show
        ChatRoom, else, show Sign in page
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && ( // check for current user and display button
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  // Reference a firestore collection - display on firestore everytime someone messages
  const messagesRef = firestore.collection("messages");
  // Make query documents in a collection
  const query = messagesRef.orderBy("createdAt").limit(25);
  // Listen to data with a 'hook' - research 'hook'
  // Reacts to changes in realtime
  const [messages] = useCollectionData(query, { idField: "id" }); // Used collection data hook
  const [formValue, setFormValue] = useState(""); // stateful value to the formValue component, store as an empty string

  // write value to firestore
  const sendMessage = async (e) => {
    // eventHandler: async function component that takes an event as its argument
    e.preventDefault(); // when form is submitted, stop from refreshing
    const { uid, photoURL } = auth.currentUser;
    // Create new document in firestore
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main>
        // Array over messages // Loop over each each document, with dedicated
        chat message component that has a key prop with a message id, that
        passes the document data as the message prop.
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      // Make input form for chat messages // write value to firestore // Bind
      state to form input
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something you won't regret"
        />
        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message; // this will show on the 'messages collection' on Cloud firestore
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received"; // conditional CSS
  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Chat;
