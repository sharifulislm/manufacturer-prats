// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0iv_-CbVkVPOleQas6OzzqEAgbsupAL8",
  authDomain: "parts-manufacturer-fa964.firebaseapp.com",
  projectId: "parts-manufacturer-fa964",
  storageBucket: "parts-manufacturer-fa964.appspot.com",
  messagingSenderId: "224171067990",
  appId: "1:224171067990:web:e843bd622d4d902bfb89f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;