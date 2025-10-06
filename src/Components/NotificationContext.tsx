import { createContext, useContext, useState, ReactNode } from "react";
import logo from "/favicon.png";
// Preload logo to cache
const preloadedLogo = new Image();
preloadedLogo.src = logo;

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
  undefined
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: Notification["type"]) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000); // keep visible for 2s
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg shadow-md z-50 bg-white border border-amber-400 text-xs md:text-sm">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
            <p
              className={`font-medium ${
                notification.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {notification.message}
            </p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
}
