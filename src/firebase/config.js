import firebase from 'firebase/app'
import 'firebase/firestore'
import { ref, onUnmounted } from 'vue';


const firebaseConfig = {
    apiKey: "AIzaSyBJT6PSfrTergr6sNHxQlAV7cFB4w525fI",
    authDomain: "contact-form-383fc.firebaseapp.com",
    projectId: "contact-form-383fc",
    storageBucket: "contact-form-383fc.appspot.com",
    messagingSenderId: "182215609164",
    appId: "1:182215609164:web:c4547b8b1e6b3299879de9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const db = firebaseApp.firestore()
  const usersCollection = db.collection('users')

  export { projectFirestore } 

  export const createUser = user => {
    return usersCollection.add(user)
  }

  export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data () : null
  }

  export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
  }

  // export const deleteUser = id => {
  //   return usersCollection.doc(id).delete()
  // }

  export const useLoadUsers = () => {
    const users = ref([])
    usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
  }