// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNlr_MNAq7HTk_NxF9hJvuyZN4GofVSNg",
  authDomain: "netfilm-gpt-89acd.firebaseapp.com",
  projectId: "netfilm-gpt-89acd",
  storageBucket: "netfilm-gpt-89acd.appspot.com",
  messagingSenderId: "377468350880",
  appId: "1:377468350880:web:f8b054aceb2c5710ab34c5",
  measurementId: "G-4WRQ7F8VRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
