// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_F_ZzEWHWbY2GlGmj8TATmVxSXK_Ay3g",
    authDomain: "hash-mango.firebaseapp.com",
    projectId: "hash-mango",
    storageBucket: "hash-mango.appspot.com",
    messagingSenderId: "615300885914",
    appId: "1:615300885914:web:4300bdf382570fba545e23"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }