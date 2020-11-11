import firebase from "firebase/app";
import * as geofirestore from "geofirestore";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const GetNearbyUsers = (event) => {
  const user = useContext(UserContext).uid;
  const firestore = firebase.firestore();
  const userRef = firestore.collection("users").doc(user);
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geoCollection = GeoFirestore.collection(`users`);
  userRef.get().then(function (doc) {
    console.log(doc.data());
    const query = geoCollection.near({
      center: new firebase.firestore.GeoPoint(
        doc.data().coordinates["r_"],
        doc.data().coordinates["o_"]
      ),
      radius: 10000,
    });
    query.get().then((value) => {
      // All GeoDocument returned by GeoQuery, like the GeoDocument added above
      console.log(value.docs);
      //reference in SwipeCard(console.log for testing)
      const nearByUsers = value.docs.map( u => u.id);
      // console.log(u);
      console.log(nearByUsers);
    });
  });
};

export default GetNearbyUsers;
