import React, { createContext, useContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { getUserCart, saveUserCart } from "../cartService";

//Custom type declarations
export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
};

type CartState = {
    items: CartItem[];
    searchQuery: string;
};

type CartAction =
    | { type: "ADD_ITEM"; payload: CartItem }
    | { type: "REMOVE_ITEM"; payload: number }
    | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
    | { type: "CLEAR_CART" }
    | { type: "LOAD_CART"; payload: CartItem[] }
    | { type: "SET_SEARCH_QUERY"; payload: string };

const initialState: CartState = {
    items: [],
    searchQuery: "",
};

//Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
    let updatedItems: CartItem[];
    switch (action.type) {
        case "ADD_ITEM":
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (itemIndex >= 0) {
                updatedItems = [...state.items];
                updatedItems[itemIndex].quantity += 1;
            } else {
                updatedItems = [...state.items, action.payload];
            }
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return { ...state, items: updatedItems };
        case "REMOVE_ITEM":
            updatedItems = state.items.filter(
                (item) => item.id !== action.payload,
            );
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return { ...state, items: updatedItems };
        case "UPDATE_QUANTITY":
            updatedItems = state.items.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item,
            );
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return { ...state, items: updatedItems };
        case "CLEAR_CART":
            localStorage.setItem("cart", JSON.stringify([]));
            return { ...state, items: [] };
        case "LOAD_CART":
            return { ...state, items: action.payload };
        case "SET_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
};

//Context
export const CartContext = createContext<
    { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

//Provider
type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [userId, setUserId] = React.useState<string | null>(null);

    //Track current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
            }
        });
        return () => unsubscribe();
    }, []);

    //Load cart from Firebase when user logs in/from localStorage for guests
    useEffect(() => {
        if (userId) {
            getUserCart(userId).then((cartItems) => {
                dispatch({ type: "LOAD_CART", payload: cartItems });
            });
        } else {
            const savedCart = localStorage.getItem("cart");
            if (savedCart) {
                try {
                    const parsedCart = JSON.parse(savedCart);
                    if (Array.isArray(parsedCart)) {
                        dispatch({
                            type: "LOAD_CART",
                            payload: parsedCart as CartItem[],
                        });
                    }
                } catch (e) {
                    console.error("Failed to parse saved cart:", e);
                    dispatch({ type: "LOAD_CART", payload: [] });
                }
            } else {
                dispatch({ type: "LOAD_CART", payload: [] });
            }
        }
    }, [userId]);

    //Save cart to Firebase when cart items change
    useEffect(() => {
        if (userId) {
            saveUserCart(userId, state.items);
        }
    }, [state.items, userId]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

//useCart Hook
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
