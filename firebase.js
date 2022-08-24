import firebase from "firebase";

// GET YOURSELF A FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "AIzaSyAVN_8EeWLdVI1gzG521GmK0O539h4_qhg",
  authDomain: "whatsapp-3f188.firebaseapp.com",
  projectId: "whatsapp-3f188",
  storageBucket: "whatsapp-3f188.appspot.com",
  messagingSenderId: "705032609631",
  appId: "1:705032609631:web:4313863a6c05b3c462e0ea",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
