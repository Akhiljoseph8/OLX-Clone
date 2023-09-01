import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDRkI3n0GYSDIG_jIHaNJykVhnCngZBl68",
    authDomain: "olx-project-66203.firebaseapp.com",
    projectId: "olx-project-66203",
    storageBucket: "olx-project-66203.appspot.com",
    messagingSenderId: "543344251558",
    appId: "1:543344251558:web:c4aa3a22a6a1f0e96b5a67"
  };
  
  export default firebase.initializeApp(firebaseConfig)