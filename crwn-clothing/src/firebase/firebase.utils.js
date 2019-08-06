import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth'; 


// Firebase config. 
const config = {
    apiKey: "AIzaSyA6wjm3zaTPeBxoR96wDiwHlVrQCp_jIq4",
    authDomain: "crwn-db-912c2.firebaseapp.com",
    databaseURL: "https://crwn-db-912c2.firebaseio.com",
    projectId: "crwn-db-912c2",
    storageBucket: "",
    messagingSenderId: "921689109412",
    appId: "1:921689109412:web:e838a9b53df60185"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get(); 

    // checking to see if the 'snapShot' of our user data exists. 
    if(!snapShot.exists) {
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
            console.log('error creating user', error.message)
        }
    }

    return userRef; 
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

// Setting up authentication with Google. 
const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 



