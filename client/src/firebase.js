// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "auth-402b2.firebaseapp.com",
	projectId: "auth-402b2",
	storageBucket: "auth-402b2.appspot.com",
	messagingSenderId: "822136465684",
	appId: "1:822136465684:web:e0c8dfc90f847c5ff9fa01",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
