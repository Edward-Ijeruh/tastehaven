import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { CartItemType } from "./Components/CartContext";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const logOrderToFirestore = async (
  userId: string,
  items: CartItemType[],
  total: number,
  reference: string,
) => {
  try {
    const ordersRef = collection(db, "orders");

    await addDoc(ordersRef, {
      userId,
      items,
      total,
      reference,
      timestamp: serverTimestamp(),
      status: "paid",
    });

    console.log("Order successfully logged to Firestore.");
  } catch (error) {
    console.error("Error logging order:", error);
    throw error;
  }
};
