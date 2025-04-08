import {useCart} from "../Components/CartContext";
import {Link} from "react-router-dom";

const Cart = () => {
    const {state, dispatch} = useCart();

    const handleRemove = (id: number) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch({type: "UPDATE_QUANTITY", payload: {id, quantity}});
    };

    const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {state.items.length === 0 ? (<p>Your Cart is empty.</p>) : 
                <div className="space-y-4">
                    {state.items.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b py-2">
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p>₦{item.price} x</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input 
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} 
                                    className="w-16 p-1 border rounded"
                                    min={1}
                                />
                                <button onClick={() => handleRemove(item.id)} className="text-red-500">Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right font-bold">Total: ₦{total}</div>
                    <div className="text-right">
                        <Link to="/checkout" className="mt-2 inline0block bg-green-500 text-white px-4 py-2 rounded">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;