import React, { Component } from 'react'
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";


class ProfileView extends Component{

  state = {
    name: "Karen",
    description: 'Little Sammy the staffy is looking for play-dates on mondays between 11am - 3pm',
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
        <button><Link to="/swipe">Fetch Swipe</Link></button>
        <button
          onClick={() => {
            auth.signOut()
          }}
        >
          Sign out
        </button>
        <button><Link to="/chat">Fetch Chat</Link></button>
      </nav>
        <div className="cards">
          <div className="card">
            <img className="" src="https://via.placeholder.com/200" alt="Profile " />
          </div>
        </div>
        <div>
          <form>
            <h3 className="profileNameUser" onDoubleClick={this.changeEditMode}>{this.state.name}</h3>
            <h3 className="profileNameUser" onDoubleClick={this.changeEditMode}>{this.state.description}</h3>
          </form>
          <div className='profileButtons'>
            <button>Play Date</button>
            <button>Overnight Stay</button>
            <button>Weekend Sleep Over</button>
            <button>Daytime Walks</button>
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


export default ProfileView
