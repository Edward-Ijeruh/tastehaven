import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import { useNotification } from "../Components/NotificationContext";
import { useAuth } from "../Components/AuthContext";
import { logOrderToFirestore } from "../firebase";
import { payWithPaystack } from "../paystackUtilities/payWithPaystack";

// PaystackPop
declare global {
  interface Window {
    PaystackPop: {
      setup: (options: any) => {
        openIframe: () => void;
      };
    };
  }
}

const Cart = () => {
  const { state, dispatch } = useCart();
  const { showNotification } = useNotification();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Cart Handlers
  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleQuantityUpdate = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const increaseQuantity = (id: number, quantity: number) => {
    handleQuantityUpdate(id, quantity + 1);
  };

  const decreaseQuantity = (id: number, quantity: number) => {
    if (quantity > 1) {
      handleQuantityUpdate(id, quantity - 1);
    }
  };

  // Totals
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 2000 : 0;
  const total = subtotal + deliveryFee;

  useEffect(() => {
    if (location.state?.fromCheckout) {
      showNotification("Order completed!", "success");
    }
  }, [location.state, showNotification]);

  // Payment Success Handler
  const handlePaymentSuccess = async (reference: string) => {
    if (!user) {
      showNotification("User not found", "error");
      return;
    }

    try {
      await logOrderToFirestore(user.uid, {
        items: state.items,
        total,
        reference,
        status: "completed",
      });

      dispatch({ type: "CLEAR_CART" });
      navigate("/cart", { state: { fromCheckout: true } });
    } catch (error) {
      console.error("Failed to log order to Firestore", error);
      showNotification("Something went wrong saving your order", "error");
    }
  };

  // Checkout
  const handleCheckout = async () => {
    if (total <= 0) {
      showNotification("Cart total must be greater than ₦0", "error");
      return;
    }

    if (!user || !user.email) {
      showNotification("Please login to place an order", "error");
      navigate("/signup");
      return;
    }

    try {
      const amountInKobo = Math.round(total * 100);

      await payWithPaystack({
        email: user.email,
        amount: amountInKobo,
        onSuccess: async (reference) => {
          await handlePaymentSuccess(reference);
        },
        onClose: () => {
          showNotification("Payment cancelled", "error");
        },
      });
    } catch (error) {
      console.error("Payment error", error);
      showNotification("Payment failed. Please try again.", "error");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Your Order</h2>

        {state.items.length === 0 ? (
          // Empty Cart State
          <div className="flex flex-col items-center justify-center text-center py-8 space-y-6">
            <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-amber-600 text-4xl">
                shopping_cart
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-stone-800">
                Your cart is empty
              </h3>
              <p className="text-stone-500 mt-1">
                Looks like you haven’t added anything yet.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-medium shadow hover:bg-amber-600/90 transition cursor-pointer"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          // Cart Items + Summary
          <div className="space-y-6">
            {/* Items */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-600/20">
              <h3 className="text-xl font-bold mb-4">Items</h3>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    {/* Left: image and text */}
                    <div className="flex gap-4 flex-1 items-start">
                      <div
                        className="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url(${item.img})` }}
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-black/60">
                          ₦{item.price.toLocaleString("en-NG")}
                        </p>
                      </div>
                    </div>

                    {/* Right: actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.quantity)}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600/20 hover:bg-amber-600/30 font-bold transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        className="w-8 text-center bg-transparent border-none focus:ring-0"
                        type="number"
                        readOnly
                        value={item.quantity}
                      />
                      <button
                        onClick={() => increaseQuantity(item.id, item.quantity)}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600/20 hover:bg-amber-600/30 font-bold transition-colors cursor-pointer"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          handleRemove(item.id);
                          showNotification(
                            `${item.name} removed from cart`,
                            "error"
                          );
                        }}
                        className="ml-2 text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-600/20">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₦{subtotal.toLocaleString("en-NG")}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Fee</p>
                  <p>₦{deliveryFee.toLocaleString("en-NG")}</p>
                </div>
                <div className="border-t border-amber-600/20 my-2"></div>
                <div className="flex justify-between font-bold text-base">
                  <p>Total</p>
                  <p>₦{total.toLocaleString("en-NG")}</p>
                </div>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              onClick={handleCheckout}
              className="w-full flex items-center justify-center rounded-xl h-14 px-6 bg-amber-600 text-white text-lg font-bold hover:bg-amber-600/90 transition-colors cursor-pointer"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
