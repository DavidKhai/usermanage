import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAukEwH6qP_pm6tb0dV-GAEh3R7y17wgXw",
    authDomain: "usersmanage-2cc3c.firebaseapp.com",
    databaseURL: "https://usersmanage-2cc3c-default-rtdb.firebaseio.com",
    projectId: "usersmanage-2cc3c",
    storageBucket: "usersmanage-2cc3c.appspot.com",
    messagingSenderId: "321464174930",
    appId: "1:321464174930:web:f38a7e37f8b43fbf26d28b",
    measurementId: "G-KP41GNKV27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const DataUser = firebase.database().ref('DataForUser/');
  