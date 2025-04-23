import { createContext, useContext, useState, ReactNode } from "react";

// Custom types
type Notification = {
  message: string;
  type: "success" | "error";
};

type NotificationContextType = {
  showNotification: (message: string, type: Notification["type"]) => void;
};

// Context
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: Notification["type"]) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000); // Slightly longer for better visibility
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 p-4 text-xs md:text-lg rounded shadow-lg z-50 transition-all duration-300 ${
            notification.type === "success"
              ? "bg-gray-100 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
};
