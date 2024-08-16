// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCUaUOpQNOBP9LMSb-H_vHlizfhL_Jdiwg",
    authDomain: "carefinder-1326d.firebaseapp.com",
    projectId: "carefinder-1326d",
    storageBucket: "carefinder-1326d.appspot.com",
    messagingSenderId: "268098000850",
    appId: "1:268098000850:web:80f25d781f40ad76521a0b",
    measurementId: "G-5VGHE323ZE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
