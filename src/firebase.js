import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// your firebase config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClWU03bqsEaqA4ZNBAr4Hmq500vx0Q4-k",
  authDomain: "disneyclone-b7d64.firebaseapp.com",
  databaseURL: "https://disneyclone-b7d64-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "disneyclone-b7d64",
  storageBucket: "disneyclone-b7d64.appspot.com",
  messagingSenderId: "322770096313",
  appId: "1:322770096313:web:09213e540f9886ade60b68",
  measurementId: "G-2STBSD8KK1"
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // firebase db
const auth = firebase.auth(); //firebase auth
const provider = new firebase.auth.GoogleAuthProvider(); // Google auth provider
const storage = firebase.storage(); // firebase storage

export { auth, provider, storage };
export default db;