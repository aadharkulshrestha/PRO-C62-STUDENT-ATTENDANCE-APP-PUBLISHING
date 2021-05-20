import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyCKDIQuCDLJtiwAVirdWzON9NW9zQEihXw",
    authDomain: "atendence-e8e40.firebaseapp.com",
    databaseURL: "https://atendence-e8e40.firebaseio.com",
    projectId: "atendence-e8e40",
    storageBucket: "atendence-e8e40.appspot.com",
    messagingSenderId: "636438192593",
    appId: "1:636438192593:web:59ca80737d702e5a7640f0"
  };



// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
//firebase.initializeApp(firebaseConfig);

export default firebase.database();
