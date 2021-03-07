import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZmqnm-oSzEIqKNIIeMIc6BNnhDLxzQ4Y",
    authDomain: "messanger-c320e.firebaseapp.com",
    projectId: "messanger-c320e",
    storageBucket: "messanger-c320e.appspot.com",
    messagingSenderId: "10733757500",
    appId: "1:10733757500:web:f51e78ba9ae022fc724f39",
    measurementId: "G-WLK0S9PKZD"
});

const db = firebaseApp.firestore();
export default db;