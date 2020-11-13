import React, { Component } from 'react'
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

import ProfilePic from './img/profilepicco.jpg'

class ProfileView extends Component{

  state = {
    name: "Brett & Sammy",
    description: '"Sammy is looking for play-dates on Mondays between 11am and 3pm. He is a fully trained, friendly goofball that loves playing football and chasing his tail. Sammy is a Labradore."',
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
      <div className="inputDiv">
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
      </div>
    )
  }

  renderDefaultView = () => {
    return(
      <div className="container">
      <div className="container-profile">
      <div className="profile-tab">
      <nav className="nav-tab">
      <button className="nav-swipe"><Link className="navlink" to="/">Swipe</Link></button>
      <button className="nav-chat"><Link className="navlink" to="/chat">Chat</Link></button>
      <button className="nav-signout"
      onClick={() => {
        auth.signOut()
      }}
      ><Link className="navlink" to="/">
      Sign out</Link>
      </button>
      </nav>
      <h1 className="fetchmate-profile">Fetchmate</h1>
      </div>
      <div className="profilePic">
      <div>
      <img
      className="main-profile-img"
      src={ProfilePic}
      alt="Profile " />
      </div>
      </div>
      <div>
      <form className="profile-form">
      <h3 className="profile-username"onDoubleClick={this.changeEditMode}>{this.state.name}</h3>
      <h3 className="profileNameUser"onDoubleClick={this.changeEditMode}>{this.state.description}</h3>
      <div>
      <button className='profile-buttons'>Play Date</button>
      <button className='profile-buttons'>Sleep Over</button>
      <button className='profile-buttons'>Evening Walks</button>
      </div>
      </form>
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


export default ProfileView;
