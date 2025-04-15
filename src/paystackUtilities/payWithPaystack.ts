interface PaystackProps {
  email: string;
  amount: number;
  reference?: string;
  onSuccess: () => void;
  onClose: () => void;
}

export const payWithPaystack = async ({
  email,
  amount,
  reference,
  onSuccess,
  onClose,
}: PaystackProps) => {
  await import("./loadPaystackScript").then((m) => m.loadPaystackScript());

  const handler = (window as any).PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100,
    ref: reference || `ref-${Date.now()}`,
    callback: onSuccess,
    onClose,
  });

  handler.openIframe();
};
