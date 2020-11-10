import firebase from "firebase/app";
import * as geofirestore from "geofirestore";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const GetNearbyUsers = (event) => {
  const user = useContext(UserContext).uid;
  const firestore = firebase.firestore();
  const userRef = firestore.doc(`users/${user}/Information/location`);
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geoCollection = GeoFirestore.collection(`users`);

  console.log(userRef);
  // const query = geocollection.near({
  //   center: new firebase.firestore.GeoPoint(40.7589, -73.9851),
  //   radius: 1000,
  // });

  // query.get().then((value) => {
  //   // All GeoDocument returned by GeoQuery, like the GeoDocument added above
  //   console.log(value.docs);
  // });
};

export default GetNearbyUsers;
