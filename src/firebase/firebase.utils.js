import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBiOZIU28z55kUWYVlVkKNxwJ23_EtoaA0",
    authDomain: "crwn-db-25ee0.firebaseapp.com",
    databaseURL: "https://crwn-db-25ee0.firebaseio.com",
    projectId: "crwn-db-25ee0",
    storageBucket: "crwn-db-25ee0.appspot.com",
    messagingSenderId: "587628543825",
    appId: "1:587628543825:web:09ac84da6a78c97ad91d70",
    measurementId: "G-0ER12ZZ6QD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
