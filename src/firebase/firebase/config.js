import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBJT6PSfrTergr6sNHxQlAV7cFB4w525fI",
    authDomain: "contact-form-383fc.firebaseapp.com",
    projectId: "contact-form-383fc",
    storageBucket: "contact-form-383fc.appspot.com",
    messagingSenderId: "182215609164",
    appId: "1:182215609164:web:c4547b8b1e6b3299879de9"
  };


  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()

  export { projectFirestore } 