import { useCart } from "../Components/CartContext";
import { useNotification } from "../Components/NotificationContext";
import { useAuth } from "../Components/AuthContext";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { loadPaystackScript } from "../paystackUtilities/loadPaystackScript";
import { logOrderToFirestore } from "../firebase";
import toast from "react-hot-toast";

// Declare PaystackPop globally for TypeScript
declare global {
  interface Window {
    PaystackPop: any;
  }
}

const Checkout = () => {
  const { state, dispatch } = useCart();
  const { showCheckoutModal } = useNotification();
  const { user } = useAuth();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = async () => {
    if (!user || !user.email) {
      toast.error("Please login to checkout");
      return;
    }

    try {
      console.log("Loading Paystack script..."); // Debugging script load
      await loadPaystackScript();

      if (!window.PaystackPop) {
        toast.error("Paystack script failed to load.");
        return;
      }

      const reference = `ref-${Date.now()}`;

      console.log("Paystack Reference:", reference);
      console.log("User Email:", user.email);

      const handler = window.PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
        email: user.email,
        amount: total * 100,
        ref: reference,
        callback: async (response: any) => {
          try {
            console.log("Payment Success Response:", response); // Debug response from Paystack
            await logOrderToFirestore(user.uid, {
              items: state.items,
              total,
              reference: response.reference, // Use the reference from the response
              status: "paid",
            });
            dispatch({ type: "CLEAR_CART" });
            toast.success("Payment successful! Order Placed.");
            showCheckoutModal();

            setTimeout(() => {
              window.location.href = "/cart";
            }, 2000);
          } catch (error) {
            console.error("Error logging order:", error);
            toast.error("Payment succeeded, but order logging failed.");
          }
        },
        onClose: () => {
          toast.error("Payment cancelled");
        },
      });

      handler.openIframe();
    } catch (error) {
      console.error("Payment error", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="space-y-4">
        {state.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Qty: {item.quantity}</p>
            </div>
            <p className="font-bold">
              ₦{item.price} x {item.quantity}
            </p>
          </div>
        ))}
        <div className="text-right font-bold text-lg">Total: ₦{total}</div>
        <div className="flex items-center justify-between">
          <Link
            to="/cart"
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded"
          >
            Back to Cart <ShoppingCart size={18} />
          </Link>
          <button
            onClick={handleCheckout}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Confirm and Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
