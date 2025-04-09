import {useCart} from "../Components/CartContext";
import {useNotification} from "../Components/NotificationContext";
import {Link} from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Checkout = () => {
    const {state, dispatch} = useCart();
    const {showCheckoutModal} = useNotification();

    const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        dispatch({type: "CLEAR_CART"});
        showCheckoutModal();
        setTimeout(() => {
            window.location.href = "/cart";
        }, 500);
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="space-y-4">
                {state.items.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b py-2">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p>{item.quantity}</p>
                        </div>
                        <p className="font-bold">₦{item.price} x {item.quantity}</p>
                    </div>
                ))}
                <div className="text-right font-bold text-lg">Total: ₦{total}</div>
                <div className="flex items-center justify-between">
                        <Link to="/cart" className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded">
                            Back to Cart <ShoppingCart size={18} />
                        </Link>
                        <div className="text-right">
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Confirm and Pay
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Checkout;