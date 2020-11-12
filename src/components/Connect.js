import React from 'react';
import { Link } from "react-router-dom";

const Connect = () => {
  return(
    <div>
      <nav>
        <button><Link to="/swipe">Fetch Swipe</Link></button>
        <button><Link to="/chat">Fetch Chat</Link></button>
      </nav>
      <h1>You just matched with _____ Send them a message!</h1>
    </div>
  )
}

export default Connect
