import {useCart} from "../Components/CartContext";
import {Link} from "react-router-dom";
import {useNotification} from "../Components/NotificationContext";
import {Trash2, Utensils} from "lucide-react";

const Cart = () => {
    const {state, dispatch} = useCart();
    const {showNotification} = useNotification();

    const handleRemove = (item: typeof state.items[0]) => {
        dispatch({type: "REMOVE_ITEM", payload: item.id});
        showNotification(`${item.name} removed from cart`, "error");
    };

    const handleQuantityUpdate = (id: number, quantity: number) => {
        dispatch({type: "UPDATE_QUANTITY", payload: {id, quantity}});
    };

    const increaseQuantity = (id: number, quantity: number) => {
        handleQuantityUpdate(id, quantity + 1);
    };

    const decreaseQuantity = (id: number, quantity: number) => {
       if (quantity > 1) {
            handleQuantityUpdate(id, quantity - 1);
       };
    };

    const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {state.items.length === 0 ? (              
                <div>
                    <p>Your Cart is empty.</p>
                    <Link to="/menu" className="flex items-center gap-2 mt-4 px-4 py-2 bg-yellow-400 text-black rounded w-40">
                            Back to Menu <Utensils size={18} />
                    </Link>
                </div>
            ) : 
                <div className="space-y-4">
                    {state.items.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b py-2">
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p>₦{item.price} x</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decreaseQuantity(item.id, item.quantity)}
                                    className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full cursor-pointer"
                                >-</button>
                                <p>{item.quantity}</p>
                                <button
                                    onClick={() => increaseQuantity(item.id, item.quantity)}
                                    className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full cursor-pointer"
                                >+</button>
                                <button onClick={() => handleRemove(item)} className="text-red-500 cursor-pointer"><Trash2 /></button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right font-bold">Total: ₦{total}</div>
                    <div className="flex items-center justify-between">
                        <Link to="/menu" className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded">
                            Back to Menu <Utensils size={18} />
                        </Link>
                        <div className="text-right">
                            <Link to="/checkout" className="mt-2 inline0block bg-green-500 text-white px-4 py-2 rounded">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;