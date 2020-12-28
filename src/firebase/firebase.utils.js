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

export const auth =  firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
} 

export default firebase;