import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const getUserCart = async (userId: string) => {
  const cartRef = doc(db, "carts", userId);
  const snapshot = await getDoc(cartRef);
  if (snapshot.exists()) {
    return snapshot.data().items || [];
  }
  return [];
};

export const saveUserCart = async (userId: string, cartItems: any[]) => {
  const cartRef = doc(db, "carts", userId);
  await setDoc(cartRef, { items: cartItems }, { merge: true });
};
