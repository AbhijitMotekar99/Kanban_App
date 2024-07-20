import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBRd8dwPqdB4JWT7Cn1O0QnkA5iFnPjHOA",
  authDomain: "kanban-137ec.firebaseapp.com",
  projectId: "kanban-137ec",
  storageBucket: "kanban-137ec.appspot.com",
  messagingSenderId: "669190432536",
  appId: "1:669190432536:web:d2de96e5ca13baf5eea06d"
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
