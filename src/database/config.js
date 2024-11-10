import { initializeApp } from "firebase/app";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCztV46GsT3Anr5q6Hpg2k0mIWBsEl3s-A",
    authDomain: "hair-stylist-6de87.firebaseapp.com",
    projectId: "hair-stylist-6de87",
    storageBucket: "hair-stylist-6de87.appspot.com",
    messagingSenderId: "126587130789",
    appId: "1:126587130789:web:7b06fe862075b60262ce4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)