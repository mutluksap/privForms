// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyByZWfGKEBBEme62isX1kr5gTAkgbE_WdM",
    authDomain: "privforms.firebaseapp.com",
    projectId: "privforms",
    storageBucket: "privforms.appspot.com",
    messagingSenderId: "768558435780",
    appId: "1:768558435780:web:d5ec314bb31dd4ef2ca891"
};

export const config = initializeApp(firebaseConfig);