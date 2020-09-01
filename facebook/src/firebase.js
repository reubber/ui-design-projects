import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBocpo4gcUslCFnOQHWFpe82MC_3RdEPOE",
  authDomain: "facebook-clone-5f273.firebaseapp.com",
  databaseURL: "https://facebook-clone-5f273.firebaseio.com",
  projectId: "facebook-clone-5f273",
  storageBucket: "facebook-clone-5f273.appspot.com",
  messagingSenderId: "223632671638",
  appId: "1:223632671638:web:20f0194212ea2ebe5fd3b7",
  measurementId: "G-89PBYF3KMN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db