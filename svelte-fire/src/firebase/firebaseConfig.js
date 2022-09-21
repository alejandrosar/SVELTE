import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyAoPpAJ0WEwf-Hzw-nFKiKY7fOUA6NaIqE",
   authDomain: "svelte-fire-1f276.firebaseapp.com",
   projectId: "svelte-fire-1f276",
   storageBucket: "svelte-fire-1f276.appspot.com",
   messagingSenderId: "715872654512",
   appId: "1:715872654512:web:de70fc4866638bbbaf9775"
 };

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

