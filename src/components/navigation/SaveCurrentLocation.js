import firebase from "firebase/app";
import * as geofirestore from "geofirestore";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const SaveCurrentLocation = (event) => {
  const user = useContext(UserContext).uid;

  const firestore = firebase.firestore();
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geoCollection = GeoFirestore.collection("users");

  const success = (pos) => {
    const coords = pos.coords;

    geoCollection.doc(user).set(
      {
        coordinates: new firebase.firestore.GeoPoint(
          coords.latitude,
          coords.longitude
        ),
      },
      { merge: true }
    );
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error);
};

export default SaveCurrentLocation;
