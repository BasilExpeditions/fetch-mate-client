import firebase from "firebase/app";
import * as geofirestore from "geofirestore";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";



  const GetNearbyUsers = (event) => {
  const user = useContext(UserContext).uid;
  const userRef = firestore.collection("users").doc(user);

  const firestore = firebase.firestore();
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geoCollection = GeoFirestore.collection("users");

  userRef.get().then(function (doc) {
    const query = geoCollection.near({
      center: new firebase.firestore.GeoPoint(
        doc.data().coordinates["r_"],
        doc.data().coordinates["o_"]
      ),
      radius: 10000,
    });
    query.get().then((value) => {
      console.log(value.docs);
      //reference in SwipeCard(console.log for testing)
      const nearByUsers = value.docs.map( u => u.id);
      return nearByUsers;
    });
  });
};

export default GetNearbyUsers;
