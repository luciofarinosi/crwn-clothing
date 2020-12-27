import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCrg_NkqOUgasTe2fckb1DTMRi4PYSa_0Y",
    authDomain: "crwn-db-d2411.firebaseapp.com",
    projectId: "crwn-db-d2411",
    storageBucket: "crwn-db-d2411.appspot.com",
    messagingSenderId: "46827806136",
    appId: "1:46827806136:web:20a49d96546e6f70d4034d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;