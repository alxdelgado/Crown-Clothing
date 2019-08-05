import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyA6wjm3zaTPeBxoR96wDiwHlVrQCp_jIq4",
    authDomain: "crwn-db-912c2.firebaseapp.com",
    databaseURL: "https://crwn-db-912c2.firebaseio.com",
    projectId: "crwn-db-912c2",
    storageBucket: "",
    messagingSenderId: "921689109412",
    appId: "1:921689109412:web:e838a9b53df60185"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopUp(provider); 

export default firebase; 



