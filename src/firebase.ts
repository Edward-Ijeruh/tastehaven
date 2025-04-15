import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcr2gukKI29af8yQEkrjClEc7pbuAA9eY",
  authDomain: "tastehaven-adc88.firebaseapp.com",
  projectId: "tastehaven-adc88",
  storageBucket: "tastehaven-adc88.firebasestorage.app",
  messagingSenderId: "542285997332",
  appId: "1:542285997332:web:a625dba312d3274da5ce01",
  measurementId: "G-SM63558LE8",
};

//Initialization
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const logOrderToFirestore = async (
  userId: string,
  order: {
    items: CartItemType[];
    total: number;
    reference: string;
    status: string;
  },
) => {
  const orderRef = collection(db, "orders");
  await addDoc(orderRef, {
    ...order,
    userId,
    createdAt: serverTimestamp(),
  });
};
