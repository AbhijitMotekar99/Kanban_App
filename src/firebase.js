import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
    apiKey: "YOUR_NEW_API_KEY",
    authDomain: "YOUR_NEW_AUTH_DOMAIN",
    projectId: "kanban-137ec",
    storageBucket: "YOUR_NEW_STORAGE_BUCKET",
    messagingSenderId: "YOUR_NEW_MESSAGING_SENDER_ID",
    appId: "YOUR_NEW_APP_ID",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(db, "localhost", 8082);
  connectFunctionsEmulator(fbFunctions, "localhost", 5002);
}
