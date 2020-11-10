import firebase from "firebase/app";
import * as geofirestore from "geofirestore";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const SaveCurrentLocation = (event) => {
  const user = useContext(UserContext).uid;
  const firestore = firebase.firestore();
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geoCollection = GeoFirestore.collection(`users`);
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   let lat = position.coords.latitude;
  //   let long = position.coords.longitude;
  // });

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
  geoCollection
    .doc(user)
    .collection("Information")
    .doc("location")
    .set({
      coordinates: new firebase.firestore.GeoPoint(1, 2),
    });
};

export default SaveCurrentLocation;
