import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"; // <- needed if using firebase rtdb
import "firebase/firestore"; // <- needed if using firestore

console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

if (window.location.hostname === "localhost") {
  firebase.firestore().useEmulator("localhost", 8080);
  firebase.auth().useEmulator("http://localhost:9099", {
    disableWarnings: true,
  });
  firebase.database().useEmulator("localhost", 9000);
  // firebase.functions().useEmulator("localhost", 5001);
}

// Initialize other services on firebase instance
// firebase.firestore(); // <- needed if using firestore

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
