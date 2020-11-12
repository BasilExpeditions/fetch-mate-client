// Chat main - chat function, render message, create new chat
// Chat body - user to user chat
// Chat input - Form, onclick button send realtime message
// Display new/old messages on realtime
// Display notification icon

// TODO:
// Ned to know who we're talking to
// bring up a seperate page that has that persons name/photo etc along with the chat box

// Store that persons uid in a variable

// when our message is created, store the sender and recipients uid's in the message body so
// we can query them later on

// retrieve a list of messages based on 1) where the user is the recipient and then order those by
// sender id (to get a list of senders)

import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import { auth, firestore } from "../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";


import "../../App.css";

const ChatRoom = () => {
  const dummy = useRef();
  // Reference a firestore collection - display on firestore everytime someone messages
  const messagesRef = firestore.collection("messages");
  // Make query documents in a collection
  const query = messagesRef.orderBy("createdAt").limit(1000);
  const [messages] = useCollectionData(query, { idField: "id" }); // Used collection data hook
  const [formValue, setFormValue] = useState(""); // stateful value to the formValue component, store as an empty string

  // write value to firestore
  const sendMessage = async (e) => {
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
      <nav>
        <button><Link to="/profileView">Fetch Profile</Link></button>
        <button><Link to="/swipe">Fetch Swipe</Link></button>
      </nav>
    <div className="container-message">
    <main className="chatroom">
    {messages &&
      messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
      </main>
      <form className="chat-form" onSubmit={sendMessage}>
      <input className="chat-input"
      value={formValue}
      onChange={(e) => setFormValue(e.target.value)}
      placeholder="Say something..."
      />
      <button className="submit-button" type="submit" disabled={!formValue}>
      Send
      </button>
      </form>
<<<<<<< HEAD
      </div>
    );
  };

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message; // this will show on the 'messages collection' on Cloud firestore
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received"; // conditional CSS: message sent, message recieved
    return (
      <div>
      <div className={`message ${messageClass}`}>
      <img
      src={
        photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
      }
      alt=""
      />
      <p>{text}</p>
      </div>
      </div>
    );
  }

  export default ChatRoom;
=======
    </div>
  </div>
  );

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message; // this will show on the 'messages collection' on Cloud firestore
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received"; // conditional CSS
    return (
      <div>
        <div className={`message ${messageClass}`}>
          <img
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
            alt=""
          />
          <p>{text}</p>
        </div>
      </div>
    );
  }
};
export default ChatRoom;
>>>>>>> f250d9f17b767c9d35febb2f5749ad3615277341
