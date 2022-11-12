// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6nMHRfN_u_HKMzf5Uy0_wQK1vg-G-CBE",
  authDomain: "braflix-fac69.firebaseapp.com",
  projectId: "braflix-fac69",
  storageBucket: "braflix-fac69.appspot.com",
  messagingSenderId: "267307686333",
  appId: "1:267307686333:web:ed44e7eb2577b5a066dad4",
  measurementId: "G-NLG7WHR14N"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp);

export {db, auth};
