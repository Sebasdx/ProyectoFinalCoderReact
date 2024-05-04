import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDFns3GSxXTc1DM_cw-vW2CByXQOTFJUhc",
  authDomain: "coderfinal-872ec.firebaseapp.com",
  projectId: "coderfinal-872ec",
  storageBucket: "coderfinal-872ec.appspot.com",
  messagingSenderId: "155396390720",
  appId: "1:155396390720:web:1fbe7155c1db20e2c244a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const getItemsById = async (id) => {
    const docRef = doc(collection(db, "items"), id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

export {
    db,
    getItemsById,
    auth
};



