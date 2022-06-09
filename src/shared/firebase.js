import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";





// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    
        apiKey: "AIzaSyCBs9_bichceCxuhATPwguotqlU6BnCTsI",
        authDomain: "my-style-diary.firebaseapp.com",
        projectId: "my-style-diary",
        storageBucket: "my-style-diary.appspot.com",
        messagingSenderId: "948386304182",
        appId: "1:948386304182:web:efa97d0092803bcc9f5617",
        measurementId: "G-BV9TYDFN60"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;