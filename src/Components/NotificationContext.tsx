import {createContext, useContext, useState, ReactNode} from "react"

//Custom types
type Notification = {
    message: string;
    type: "success" | "error";
};

type NotificationContextType = {
    showNotification: (message: string, type: Notification["type"]) => void;
};

//Context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({children}: {children: ReactNode}) => {
    const [notification, setNotification] = useState<Notification | null>(null);

    const showNotification = (message: string, type: Notification["type"]) => {
        setNotification({message, type});
        setTimeout(() => setNotification(null), 3000)
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && (
                <div
                    className={`fixed bottom-4 right-4 p-4 rounded shadow-lg text-white z-50 ${
                        notification.type === "success"
                            ? "bg-green-500"
                            : notification.type === "error"
                            ? "bg-red-500"
                            : "bg-blue-500"
                         }`}
                >
                    {notification.message}
                </div>
            )}
        </NotificationContext.Provider>
    );
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within a NotificationProvider");
    }
    return context;
};