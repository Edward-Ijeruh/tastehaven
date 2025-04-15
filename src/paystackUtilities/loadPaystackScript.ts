export const loadPaystackScript = () => {
  return new Promise<void>((resolve, reject) => {
    if (window.PaystackPop) {
      console.log("Paystack script already loaded");
      return resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => {
      console.log("Paystack script loaded successfully!");
      resolve();
    };

    script.onerror = () => {
      console.error("Failed to load Paystack script");
      reject(new Error("Failed to load Paystack script"));
    };

    document.body.appendChild(script);
  });
};
