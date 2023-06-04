import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyD0CIfvE7jl85OqosNHRIDZfh-81NqAKrk",
  authDomain: "contact-manager-5f857.firebaseapp.com",
  databaseURL: "https://contact-manager-5f857-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-manager-5f857",
  storageBucket: "contact-manager-5f857.appspot.com",
  messagingSenderId: "556291788463",
  appId: "1:556291788463:web:6fcdc4febbf760591e0e5a",
  measurementId: "G-HNFWXH8FD7"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
