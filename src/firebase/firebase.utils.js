import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyBuu1qUWBS9CWGToZmETvue1JdHBhEV6cA",
    authDomain: "crwn-db-f2c93.firebaseapp.com",
    projectId: "crwn-db-f2c93",
    storageBucket: "crwn-db-f2c93.appspot.com",
    messagingSenderId: "310133852770",
    appId: "1:310133852770:web:491dc612767c5af4eb5f3b",
    measurementId: "G-W2Y99CTSEN"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;