import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKnhSnGf6jbqDvk292JjjVvtgwAayWUiI",
  authDomain: "miproyecto-48208.firebaseapp.com",
  projectId: "miproyecto-48208",
  storageBucket: "miproyecto-48208.appspot.com",
  messagingSenderId: "1024616223938",
  appId: "1:1024616223938:web:6e69ec3ee636a4c092575b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
