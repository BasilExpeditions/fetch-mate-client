import React, { Component } from 'react'
import { render } from "react-dom";
import axios from 'axios';
import { auth, firestore } from '../firebase/firebaseindex';
import * as geofirestore from 'geofirestore';


class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  saveLocation(content){
          console.log(content);
    }

  render(){
    return (
      <div>
        <LocationForm onSubmit={ this.saveLocation }/>
      </div>
    );
  }
}

class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: '',
      geohash: '',
      geopoint: ''
    };
    this._handleChange = this._handleChange.bind(this);
    this.componentDidMount = this._componentDidMount.bind(this);
    this._handlePostcode = this._handlePostcode.bind(this);
  }

  _handleChange(event) {
      let value = event.target.value;
      this.setState({postcode: value
    });
  }

  _handlePostcode(event) {
    event.preventDefault();
    this.props.onSubmit( this.state );
  }

  _componentDidMount(event) {
    console.log("something");
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);



          const API_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en.json`
          axios.get(API_URL).then((results) =>{
            console.log("hello", results);
          });
        },
        function(error){
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
  }

  render(){
    return (
      <div>
        <form onSubmit={this._handlePostcode} >
          <h1>Search Location</h1>
          <input name="postcode" type="text" placeholder="Postcode" onChange={ this._handleChange }/>
          <input type="submit" value="Search" />
        </form>
        <button onClick={this._componentDidMount}>Find near me</button>
      </div>
    );
  }
}


export default Location;

// export const createProject = (location) => {
//   return (dispatch, getState, {getFirebase, getFirestore}) => {
//     const firestore = getFirestore();
//     firestore.collection('location').add({
//       postcode: 2047;
//       createdAt: new Data()
//     })
//     dispatch({type: 'CREATE_PROJECT', location});
//   }
// };
