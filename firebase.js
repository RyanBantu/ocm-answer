import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkyMLSO9zZYn4yWaVqNohFYOSbI_HCazQ",
    authDomain: "onechurchmanipal-9d11a.firebaseapp.com",
    projectId: "onechurchmanipal-9d11a",
    storageBucket: "onechurchmanipal-9d11a.appspot.com",
    messagingSenderId: "225289070693",
    appId: "1:225289070693:web:18ba29b8fcddfbfa763e8c",
    measurementId: "G-VGC2ZB983F"
};

// Initialize Firebase 

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

