// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Author: Gagandeep Singh
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgja72GBCsVSc3ROgZr7WvSbvV9EJuTU0",
  authDomain: "auth-anpr.firebaseapp.com",
  projectId: "auth-anpr",
  storageBucket: "auth-anpr.firebasestorage.app",
  messagingSenderId: "1082269071416",
  appId: "1:1082269071416:web:9c979e88169b34824d8ecd",
  measurementId: "G-MCFW1G40QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { app, auth, analytics };