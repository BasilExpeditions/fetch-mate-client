// import React, { Component, useContext, useState } from 'react'

// import React, { Component } from 'react'
// import { render } from "react-dom";
// import axios from 'axios';
// // import { auth, firestore, firebase } from '../../firebase/firebase';
// import * as firebase from '../../firebase/firebase';
// import 'firebase/firestore';
// import * as geofirestore from 'geofirestore';
// // import { useAuthState } from 'react-firebase-hooks/auth';
// // import { useCollectionData } from 'react-firebase-hooks/firestore';
// // import { UserContext } from "../../providers/UserProvider";
//
//
// class Location extends Component {
//   constructor(props) {
//     super(props);
//     this.state ={
//       postcode: '',
//       geohash: '',
//       geopoint: ''
//     };
//   }
//
//   saveLocation(content){
//
//     const firestore = firebase.firestore();
//     const GeoFirestore = geofirestore.initializeApp(firestore);
//     const geocollection = GeoFirestore.collection('pets');
//
//     geocollection.add({
//   name: 'Geofirestore',
//   score: 100,
//   // The coordinates field must be a GeoPoint!
//   coordinates: new firebase.firestore.GeoPoint(40.7589, -73.9851)
// })
//
//     }
//
//   render(){
//     return (
//       <div>
//         <LocationForm onSubmit={ this.saveLocation }/>
//       </div>
//     );
//   }
// }
//
// class LocationForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postcode: '',
//     };
//     this._handleChange = this._handleChange.bind(this);
//     this.componentDidMount = this._componentDidMount.bind(this);
//     this._handlePostcode = this._handlePostcode.bind(this);
//   }
//
//   _handleChange(event) {
//       let value = event.target.value;
//       this.setState({postcode: value
//     });
//   }
//
//   _handlePostcode(event) {
//     event.preventDefault();
//     this.props.onSubmit( this.state );
//   }
//
//   _componentDidMount(event) {
//     console.log("something");
//       navigator.geolocation.getCurrentPosition(
//         function(position) {
//           console.log("Latitude is :", position.coords.latitude);
//           console.log("Longitude is :", position.coords.longitude);
//
//
//           const API_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en.json`
//           axios.get(API_URL).then((results) =>{
//             console.log("hello", results);
//           });
//         },
//         function(error){
//           console.error("Error Code = " + error.code + " - " + error.message);
//         }
//       );
//   }
//
//   render(){
//     return (
//       <div>
//         <form onSubmit={this._handlePostcode} >
//           <h1>Search Location</h1>
//           <input name="postcode" type="text" placeholder="Postcode" onChange={ this._handleChange }/>
//           <input type="submit" value="Search" />
//         </form>
//         <button onClick={this._componentDidMount}>Find near me</button>
//       </div>
//     );
//   }
// }
//
// export default Location;
