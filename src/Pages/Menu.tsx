import React, {useState} from "react";
import {useCart} from "../Components/CartContext";
import {MenuItems} from "../Components/MenuItems";
import { useNotification } from "../Components/NotificationContext";

const Menu = () => {
    const [searchQuery, setSeacrhQuery] = useState<string>("");
    const {dispatch} = useCart();
    const {showNotification} = useNotification();

    // Filter items
    const filteredItems = MenuItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSeacrhQuery(query);
        dispatch({type: "SET_SEARCH_QUERY", payload: query});
    };

    const handleAddToCart = (item: typeof MenuItems[0]) => {
        const itemWithQuantity = { ...item, quantity: 1 };
        dispatch({ type: "ADD_ITEM", payload: itemWithQuantity });
        showNotification(`${item.name} added to cart!`, "success");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Menu</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for items..."
                className="p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map(item => (
                    <div key={item.id} className="border p-4 rounded shadow-md">
                        <img src={item.img} alt={item.name} className="w-full h-48 object-cover mb-4" />
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-700">₦{item.price}</p>
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
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