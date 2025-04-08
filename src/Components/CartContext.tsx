import React, {createContext, useContext, useReducer, useEffect} from "react";

//Custom type declarations
type CartItem = {
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
    | {type: "ADD_ITEM"; payload: CartItem}
    | {type: "REMOVE_ITEM"; payload: number}
    | {type: "UPDATE_QUANTITY"; payload: {id: number, quantity: number}}
    | {type: "CLEAR_CART"}
    | {type: "LOAD_CART"; payload: CartItem[]}
    | {type: "SET_SEARCH_QUERY"; payload: string};

const initialState: CartState = {
    items: [],
    searchQuery: "",
};

//Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_ITEM":
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const updatedItems = [...state.items];
                updatedItems[itemIndex].quantity += 1;
                return {...state, items: updatedItems};
            }
            return {...state, items: [...state.items, action.payload]};
        case "REMOVE_ITEM":
            return {...state, items: state.items.filter(item => item.id !== action.payload)};
        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item)
            };
        case "CLEAR_CART":
            return {...state, items: []};
        case "SET_SEARCH_QUERY":
            return {...state, searchQuery: action.payload};
        default:
            return state;
    }
};

//Context
const CartContext = createContext<{state: CartState; dispatch: React.Dispatch<CartAction>}| undefined>(undefined)

//Provider
type CartProviderProps = {
    children: React.ReactNode;
}

export const CartProvider = ({children}: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            dispatch({type: "LOAD_CART", payload: JSON.parse(savedCart)});
        }
    }, []);

    return (
        <CartContext.Provider value={{state, dispatch}}>
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
    return context
};