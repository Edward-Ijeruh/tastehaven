import { loadPaystackScript } from "./loadPaystackScript";

interface PaystackProps {
  email: string;
  amount: number;
  reference?: string;
  onSuccess: (reference: string) => void;
  onClose: () => void;
}

export const payWithPaystack = async ({
  email,
  amount,
  reference,
  onSuccess,
  onClose,
}: PaystackProps) => {
  await loadPaystackScript();

  const ref = reference || `ref-${Date.now()}`;

  const handler = (window as any).PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount,
    ref,
    callback: (response: { reference: string }) => {
      onSuccess(response.reference);
    },
    onClose,
  });

  handler.openIframe();
};
