import React, { useEffect, useState } from "react";
import { useCart } from "../Components/CartContext";
import { MenuItems } from "../Components/MenuItems";
import { useNotification } from "../Components/NotificationContext";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Menu = () => {
    const [searchQuery, setSeacrhQuery] = useState<string>("");
    const { dispatch } = useCart();
    const { showNotification } = useNotification();

    //Get search query from local storage
    useEffect(() => {
        const savedSearchQuery = localStorage.getItem("searchQuery");
        if (savedSearchQuery) {
            setSeacrhQuery(savedSearchQuery);
        }
    }, []);

    //Update to local storage
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSeacrhQuery(query);
        localStorage.setItem("searchQuery", query);
        dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    };

    // Filter items
    const filteredItems = MenuItems.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const handleAddToCart = (item: (typeof MenuItems)[0]) => {
        const itemWithQuantity = { ...item, quantity: 1 };
        dispatch({ type: "ADD_ITEM", payload: itemWithQuantity });
        showNotification(`${item.name} added to cart!`, "success");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Menu</h1>
            <div className="flex items-center justify-between mb-4">
                <input
                    type="search"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search for items..."
                    className="p-2 mb-4 border border-gray-300 rounded"
                />
                <Link
                    to="/cart"
                    className="flex items-center mb-4 gap-2 px-4 py-2 bg-yellow-400 text-black rounded"
                >
                    Cart <ShoppingCart size={18} />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                    <div key={item.id} className=" p-4 rounded shadow-md">
                        <img
                            src={item.img}
                            alt={item.name}
                            className={`w-full h-48 mb-4 ${item.category === "Soda Drinks" ? "object-contain bg-white" : "object-cover"}`}
                        />
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-700">₦{item.price}</p>
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="mt-2 px-4 py-2 bg-black text-white rounded cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
