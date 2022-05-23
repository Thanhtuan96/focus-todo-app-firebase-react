// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { doc, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: 'AIzaSyBv-eW4Ul2XzQboovMA4LdGEC8wdB34Wms',
    authDomain: 'focus-app-1.firebaseapp.com',
    projectId: 'focus-app-1',
    storageBucket: 'focus-app-1.appspot.com',
    messagingSenderId: '456764164984',
    appId: '1:456764164984:web:f515c533cbaf537c6bd68d',
    measurementId: 'G-8DWCBW781C',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
