import { createContext, useContext, useState, ReactNode } from "react";
import { CheckCheck } from "lucide-react";

//Custom types
type Notification = {
    message: string;
    type: "success" | "error";
};

type NotificationContextType = {
    showNotification: (message: string, type: Notification["type"]) => void;
    showCheckoutModal: (message?: string, type?: Notification["type"]) => void;
};

//Context
const NotificationContext = createContext<NotificationContextType | undefined>(
    undefined,
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [notification, setNotification] = useState<Notification | null>(null);
    const [checkoutModal, setCheckoutModal] = useState<boolean>(false);

    const showNotification = (message: string, type: Notification["type"]) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 1000);
    };

    const showCheckoutModal = () => {
        setCheckoutModal(true);
        setTimeout(() => setCheckoutModal(false), 1000);
    };

    return (
        <NotificationContext.Provider
            value={{ showNotification, showCheckoutModal }}
        >
            {children}
            {notification && (
                <div
                    className={`fixed top-20 left-1/2 transform -translate-x-1/2 p-4 text-xs md:text-lg rounded shadow-lg z-50 ${
                        notification.type === "success"
                            ? "bg-gray-100 text-black"
                            : notification.type === "error"
                              ? "bg-red-500 text-white"
                              : "bg-blue-500"
                    }`}
                >
                    {notification.message}
                </div>
            )}
            {checkoutModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-40 h-40 mx-auto mb-4 bg-green-500 rounded-full">
                            <div className="text-white text-5xl font-bold !important">
                                <CheckCheck size={42} />
                            </div>
                        </div>
                        <p className="text-lg font-bold">Order Completed!</p>
                    </div>
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
