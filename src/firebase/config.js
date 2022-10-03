// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG5nQYmQHZXEYO142W--fzIIckGs4qTVY",
    authDomain: "e-commerce-react-cce95.firebaseapp.com",
    projectId: "e-commerce-react-cce95",
    storageBucket: "e-commerce-react-cce95.appspot.com",
    messagingSenderId: "557993680140",
    appId: "1:557993680140:web:4543397d7a971f788e7d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service


export const db = getFirestore(app);

export const auth = getAuth(app);