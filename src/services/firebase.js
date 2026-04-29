// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQH37SMypDHvBOv4cRVRGtiVNy2FC08ME",
  authDomain: "drac-olive-web.firebaseapp.com",
  projectId: "drac-olive-web",
  storageBucket: "drac-olive-web.firebasestorage.app",
  messagingSenderId: "45264983300",
  appId: "1:45264983300:web:1d368cf70de970611f6c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);