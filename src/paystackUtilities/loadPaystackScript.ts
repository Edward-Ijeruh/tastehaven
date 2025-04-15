export const loadPaystackScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById("paystack-script");
    if (existingScript) return resolve();

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.id = "paystack-script";
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
