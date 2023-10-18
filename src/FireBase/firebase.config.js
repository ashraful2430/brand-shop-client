// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM5UsmBf5dFuStiBzcSUuhSiDqe8aN3I4",
    authDomain: "my-tenth-assignment-5a6bc.firebaseapp.com",
    projectId: "my-tenth-assignment-5a6bc",
    storageBucket: "my-tenth-assignment-5a6bc.appspot.com",
    messagingSenderId: "755085469071",
    appId: "1:755085469071:web:4968c30acdd0500382d7fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;