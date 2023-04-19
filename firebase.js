
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDrw7QuUSDQOtL_bn0yW4unIDBs1fh6Q-0",
    authDomain: "linker-c43ff.firebaseapp.com",
    projectId: "linker-c43ff",
    storageBucket: "linker-c43ff.appspot.com",
    messagingSenderId: "410712943176",
    appId: "1:410712943176:web:8752f5f9971cbe99dec67d",
    measurementId: "G-EQ8E5Y2ES7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db }