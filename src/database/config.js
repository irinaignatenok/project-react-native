import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpRDU_PewJ_cJcg9nBnI8pcO_e7GRZPI0",
    authDomain: "crossplatformproject-1e285.firebaseapp.com",
    projectId: "crossplatformproject-1e285",
    storageBucket: "crossplatformproject-1e285.appspot.com",
    messagingSenderId: "517137444818",
    appId: "1:517137444818:web:50eccbab9a2f37653b620b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)