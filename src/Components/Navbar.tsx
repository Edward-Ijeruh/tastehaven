import {useState, useContext} from "react";
import {CartContext, CartItem} from "./CartContext";
import {Link} from "react-router-dom";
import {Menu, X, Home, ShoppingCart, Phone, Utensils} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const context = useContext(CartContext);
    const cartItemCount = context?.state?.items?.reduce((total: number, item: CartItem) => total + item.quantity, 0) || 0;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-red-500 text-white px-4 py-3 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">TasteHaven</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="flex items-center gap-2 hover:text-yellow-300"><Home size={18} /> Home</Link>
                    <Link to="/menu" className="flex items-center gap-2 hover:text-yellow-300"><Utensils size={18} /> Menu</Link>
                    <Link to="/cart" className="flex items-center gap-2 hover:text-yellow-300">
                        <ShoppingCart size={18} /> 
                            Cart
                            {cartItemCount > 0 && (
                                <span className="mt-1 text-[9px] bg-yellow-300 text-black rounded-full px-2 py-1">{cartItemCount}</span>
                            )}
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-300"><Phone size={18} /> Contact Us</Link>                    
                </div>  

                {/* Hamburger Icon */}
                <button onClick={toggleMenu} className="md:hidden">
                    {isOpen ? <X size={24} /> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Navbar */}
            {isOpen && (
                <div className="absolute right-0 top-full md:hidden bg-red-600 rounded-md mt-2 p-3 space-y-3 shadow-lg w-48 ml-auto mr-4">
                    <Link onClick={() => setIsOpen(false)} to="/" className="flex items-center gap-2 hover:text-yellow-300">
                        <Home size={18} /> Home
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/menu" className="flex items-center gap-2 hover:text-yellow-300">
                        <Utensils size={18} /> Menu
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/cart" className="flex items-center gap-2 hover:text-yellow-300">
                        <ShoppingCart size={18} /> Cart
                            {cartItemCount > 0 && (
                                <span className="mt-1 text-[9px] bg-yellow-300 text-black rounded-full px-2 py-1">{cartItemCount}</span>
                            )}  
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/contact" className="flex items-center gap-2 hover:text-yellow-300">
                        <Phone size={18} /> Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;