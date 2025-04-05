import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdi7ko5AmUYgd-CBtOlmdSGvtRghY5K4Q",
  authDomain: "csc481-final-project-8a2c0.firebaseapp.com",
  projectId: "csc481-final-project-8a2c0",
  storageBucket: "csc481-final-project-8a2c0.firebasestorage.app",
  messagingSenderId: "810325213661",
  appId: "1:810325213661:web:34caea1c32cc555cbb3634",
  measurementId: "G-TD887H9NHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default app;
export { auth, db, collection, addDoc, getDocs };