import firebase from 'firebase';

const firebaseConfig = {
    apiKey:"API KEY",
    authDomain: "whatsapp-clone-cc355.firebaseapp.com",
    projectId: "whatsapp-clone-cc355",
    storageBucket: "whatsapp-clone-cc355.appspot.com",
    messagingSenderId: "826372200939",
    appId: "API ID"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
