import React, { useState, useMemo } from 'react'
import SaveCurrentLocation from "./navigation/SaveCurrentLocation";
import { withRouter, Link } from "react-router-dom";
import TinderCard from 'react-tinder-card';

import kitty1 from './img/kitty1.jpg'
import kitty2 from './img/kitty2.jpeg'
import doggo1 from './img/doggo1.jpeg'
import doggo2 from './img/doggo2.jpeg'
import doggo3 from './img/doggo3.jpg'


import '../App.css'


const db = [
  {
    name: 'Penelope Jr, 14',
    url: kitty1
  },

  {
    name: 'Cooper, 8',
    url: kitty2
  },

  {
    name: 'Rufus, 3',
    url: doggo1
  },

  {
    name: 'Ginger, 10',
    url: doggo2
  },

  {
    name: 'Bob, 7',
    url: doggo3
  }
]

const alredyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function SwipeCard () {
  const [characters, setCharacters,] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  ///////////////////////////////////////////////////////////
  // const [users, setUsers] = useState([])
  // const [saveUser, setSaveUser] = useState()

  //we need to save the current logged in User location before fetching all users in the same radius ( fetchUsers() )

  //How to get saveUsers to fire before fetchUsers


  //saveUsers and fetchUsers are defined but never used????

  // function saveUsers (result) {
  // SaveCurrentLocation(result).then(setSaveUser(...saveUser, result))
  // }
  //
  // function fetchUsers (result) {
  //   GetNearbyUsers(result).then(setUsers(...users, result))
  // }

  /////////////////////////////////////////////////////////////

  // useMemo is a React hook that memorizes the output of a function.
  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alredyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alredyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alredyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  SaveCurrentLocation();

  return (
    <div className="container">
    <div className="swipe-tab">
    <nav className="nav">
    <button className="nav-profile"><Link className="navlink" to="/profile">Profile</Link></button>
    <button className="nav-chat"><Link className="navlink" to="/chat">Chat</Link></button>
    </nav>
    <h1 className="fetchmate">Fetchmate</h1>
    </div>
    <div className="container-swipecard">
    <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
    <div className='cardContainer'>
    {characters.map((character, index) =>
      <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
      <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
      <h3>{character.name}</h3>
      </div>
      </TinderCard>
    )}
    </div>
    <div className='buttons'>
    <button className="left-button" onClick={() => swipe('left')}>Swipe left!</button>
    <button className="right-button" onClick={() => swipe('right')}>Swipe right!</button>
    </div>
    </div>
    {console.log(lastDirection)}
    </div>
  )
}


export default withRouter(SwipeCard);
