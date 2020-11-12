import React, { Component } from 'react'
import { auth } from "../firebase/firebase";
import { withRouter, Link } from "react-router-dom";

import ProfilePic from './img/profilepicco.jpg'

class ProfileView extends Component{

  state = {
    name: "Brett",
    description: 'Little Sammy the Labradore is looking for play-dates on mondays between 11am and 3pm',
    isInEditMode: false
  }

changeEditMode = () => {
  this.setState({
    isInEditMode: !this.state.isInEditMode
  })
}

updateComponentValue = () => {
  this.setState({
    isInEditMode: false,
    name: this.refs.theNameInput.value,
    description: this.refs.theDescriptionInput.value
  })
}

renderEditView = () => {
  return (
  <div className='editProfile'>
    <h1 className="profileNameUser">Username:</h1>
    <input
      className="editInput"
      type="text"
      defaultValue={this.state.name}
      ref="theNameInput"
    />
    <h1 className="profileNameUser">Description:</h1>
    <input
      className="editInput"
      type="text"
      defaultValue={this.state.description}
      ref="theDescriptionInput"
    />
    <div>
    <button onClick={this.changeEditMode}>Cancel</button>
    <button onClick={this.updateComponentValue}>OK</button>
    </div>
  </div>
  )
}

renderDefaultView = () => {
  return(
    <div className="App">
      <nav>
        <button><Link to="/">Fetch Swipe</Link></button>
        <button
          onClick={() => {
            auth.signOut()
          }}
        >
          Sign out
        </button>
        <button><Link to="/chat">Fetch Chat</Link></button>
      </nav>
        <div className="profilePic">
          <div>
            <img
            className="biggerProfilePic"
            src={ProfilePic}
            alt="Profile " />
          </div>
        </div>
        <div>
          <form>
            <h3 className="profileUsername" onDoubleClick={this.changeEditMode}>{this.state.name}</h3>
            <h3 className="profileNameUser" onDoubleClick={this.changeEditMode}>{this.state.description}</h3>
            <strong>Double click text to edit</strong>
          </form>
          <div>
            <button className='profileButtons'>Play Date</button>
            <button className='profileButtons'>Sleep Over</button>
            <button className='profileButtons'>Evening Walks</button>
            </div>
        </div>
      </div>
  )
}

  render() {
    return (
      this.state.isInEditMode ?
      this.renderEditView() :
      this.renderDefaultView()
    )
  }
}


export default withRouter(ProfileView);
