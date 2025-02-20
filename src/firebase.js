// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfnZCd96IElLmIIl3O0XUhrYH8McHE73k",
    authDomain: "flourish-alliance.firebaseapp.com",
    projectId: "flourish-alliance",
    storageBucket: "flourish-alliance.firebasestorage.app",
    messagingSenderId: "198845444916",
    appId: "1:198845444916:web:5ce14a2cc18fabb1412b61",
    measurementId: "G-N59DLNXCWN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };