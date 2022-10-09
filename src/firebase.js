import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAawHrMkoPYLJDEorkIZErIz-b_vJ980i0",
  authDomain: "crud-diplomado-ivan.firebaseapp.com",
  projectId: "crud-diplomado-ivan",
  storageBucket: "crud-diplomado-ivan.appspot.com",
  messagingSenderId: "414970843172",
  appId: "1:414970843172:web:226ab4eb310e1e5aba08b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);
