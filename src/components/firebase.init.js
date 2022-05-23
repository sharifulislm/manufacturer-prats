// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0PYcDxbjPXobmgM88EdSY2DiCsJNqH8Y",
  authDomain: "warehouse-management-a16cc.firebaseapp.com",
  projectId: "warehouse-management-a16cc",
  storageBucket: "warehouse-management-a16cc.appspot.com",
  messagingSenderId: "835155004258",
  appId: "1:835155004258:web:e3d652f29305fdf5737a3b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;