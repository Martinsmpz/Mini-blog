import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAyk2OyxNoLmQLOoxk6ObAxNIT1mfvTcvs",
  authDomain: "miniblog-d5478.firebaseapp.com",
  projectId: "miniblog-d5478",
  storageBucket: "miniblog-d5478.appspot.com",
  messagingSenderId: "53193349728",
  appId: "1:53193349728:web:bea64bc35bea806a40c105"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db };