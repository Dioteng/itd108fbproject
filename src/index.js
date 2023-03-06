// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWFlcUirDy_M6S_U9WNITNKtTOJfBFgTE",
  authDomain: "fir-itd108.firebaseapp.com",
  projectId: "fir-itd108",
  storageBucket: "fir-itd108.appspot.com",
  messagingSenderId: "362658377321",
  appId: "1:362658377321:web:2c667a90ba18c5fe7d3cf8",
  measurementId: "G-6LCYHW6ZFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)