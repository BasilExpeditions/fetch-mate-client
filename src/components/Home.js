import React from 'react';
import Location from './Location'

const Home = () => {
  return(
    <div>
      <Location />
      <h2>Below are the currently existing routes</h2>
      <h3>/</h3>
      <h3>/swipe</h3>
      <h3>/connect</h3>
      <h3>Login with google on this page im assuming? (Firebase integration)</h3>
    </div>
  )
}

export default Home