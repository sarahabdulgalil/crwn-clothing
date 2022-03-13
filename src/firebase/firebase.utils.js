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

export const createUserProfileDocument = async (userAuth, ...additionalData ) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;