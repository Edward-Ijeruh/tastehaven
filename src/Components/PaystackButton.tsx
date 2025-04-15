import {payWithPaystack} from "../paystackUtilities/payWithPaystack";

interface PaystackButtonProps {
  email: string;
  amount: number;
}

export const PaystackButton = ({ email, amount }: PaystackButtonProps) => {
  const handlePayment = async () => {
    try {
      await payWithPaystack({
        email,
        amount: amount * 100, //convert to kobo
        onSuccess: () => {
          console.log("Payment successful");
          //TODO: Handle successful payment
        },
        onClose: () => {
          console.log("Payment closed");
        },
      });
    } catch (err) {
      console.error("Payment error", err);
    }
  };

  return (
    <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded">
      Pay ₦{amount}
    </button>  //TODO: Add loading state
  )
}