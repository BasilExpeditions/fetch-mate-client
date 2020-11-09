import React, { Component } from 'react'


const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'


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
  <div>
    <p>Username:</p>
    <input
      className="editInput"
      type="text"
      defaultValue={this.state.name}
      ref="theNameInput"
    />
    <p>Description:</p>
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
    <div>
        <div className="cards">
          <div className="card">
            <img src="https://via.placeholder.com/200" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/200" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/200" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/200" />
          </div>
        </div>
        <div>
          <form>
            <h4 onDoubleClick={this.changeEditMode}>{this.state.name}</h4>
            <p onDoubleClick={this.changeEditMode}>{this.state.description}</p>
          </form>
          <div className='buttons'>
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
