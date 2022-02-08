import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzbX2Eqzpow8jFI-e7-OxThk3oSmQBTZo",
    authDomain: "whatsapp-clone-cc355.firebaseapp.com",
    projectId: "whatsapp-clone-cc355",
    storageBucket: "whatsapp-clone-cc355.appspot.com",
    messagingSenderId: "826372200939",
    appId: "1:826372200939:web:dd7a84c0f0c6c4b94761ae"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };