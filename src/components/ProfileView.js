import React, { Component } from 'react'


const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'


class ProfileView extends Component{



  render() {
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
            <h4>Karen & Rupert</h4>
            <p>Little Sammy the staffy is looking for play-dates on mondays between 11am - 3pm</p>
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
}


export default ProfileView
