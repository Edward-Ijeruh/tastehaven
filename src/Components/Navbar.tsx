import { useState, useContext, useEffect, useRef } from "react";
import { CartContext, CartItem } from "./CartContext";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  Phone,
  Utensils,
  User,
} from "lucide-react";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const context = useContext(CartContext);
  const { user } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  const cartItemCount =
    context?.state?.items?.reduce(
      (total: number, item: CartItem) => total + item.quantity,
      0,
    ) || 0;

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path: string) => location.pathname === path;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-red-500 text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TasteHaven
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/") ? "text-yellow-300" : ""}`}
          >
            <Home size={18} /> Home
          </Link>
          <Link
            to="/menu"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/menu") ? "text-yellow-300" : ""}`}
          >
            <Utensils size={18} /> Menu
          </Link>
          <Link
            to="/cart"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/cart") ? "text-yellow-300" : ""}`}
          >
            <ShoppingCart size={18} />
            Cart
            {cartItemCount > 0 && (
              <span className="mt-1 text-[9px] bg-yellow-300 text-black rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link
            to="/contact"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/contact") ? "text-yellow-300" : ""}`}
          >
            <Phone size={18} /> Contact Us
          </Link>

          {/* Conditionally render login/signup or profile links */}
          {!user ? (
            <>
              <Link
                to="/login"
                className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/login") ? "text-yellow-300" : ""}`}
              >
                <User size={18} /> Login/Sign up
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/profile") ? "text-yellow-300" : ""}`}
            >
              <User size={18} /> Profile
            </Link>
          )}
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full md:hidden bg-red-600 rounded-md mt-2 p-3 space-y-3 shadow-lg w-48 ml-auto mr-4"
        >
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/") ? "text-yellow-300" : ""}`}
          >
            <Home size={18} /> Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/menu"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/menu") ? "text-yellow-300" : ""}`}
          >
            <Utensils size={18} /> Menu
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/cart"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/cart") ? "text-yellow-300" : ""}`}
          >
            <ShoppingCart size={18} /> Cart
            {cartItemCount > 0 && (
              <span className="mt-1 text-[9px] bg-yellow-300 text-black rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contact"
            className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/contact") ? "text-yellow-300" : ""}`}
          >
            <Phone size={18} /> Contact Us
          </Link>

          {/* Conditionally render login/signup or profile links */}
          {!user ? (
            <>
              <Link
                onClick={() => setIsOpen(false)}
                to="/login"
                className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/login") ? "text-yellow-300" : ""}`}
              >
                <User size={18} /> Login/ Sign up
              </Link>
            </>
          ) : (
            <Link
              onClick={() => setIsOpen(false)}
              to="/profile"
              className={`flex items-center gap-2 hover:text-yellow-300 ${isActive("/profile") ? "text-yellow-300" : ""}`}
            >
              <User size={18} /> Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
