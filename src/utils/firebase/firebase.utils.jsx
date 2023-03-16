// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZSdYQvX_hBZuRk-R7VaWAaOcqzrj_m-Y",
    authDomain: "crwn-clothing-db-f2160.firebaseapp.com",
    projectId: "crwn-clothing-db-f2160",
    storageBucket: "crwn-clothing-db-f2160.appspot.com",
    messagingSenderId: "426951696600",
    appId: "1:426951696600:web:2d83ec8904b86b8e26f7ad"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

//We can have more one provider (ex with popup, redirects)
provider.setCustomParameters({
    prompt: "select_account"
});

//we must have one auth service, its singleton
export const auth = getAuth();
export const signInWithGooglePopup =()=> signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt =new Date();

        try{
            await setDoc(userDocRef,{displayName,
            email,
            createdAt})
        }catch(error){
            console.log('error creating the user',error.message);
        }
    }
    return userDocRef;
}