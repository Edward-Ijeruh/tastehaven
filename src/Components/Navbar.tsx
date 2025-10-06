import { useState, useContext } from "react";
import { CartContext, CartItem } from "./CartContext";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const getInitials = (name: string) => {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const context = useContext(CartContext);
  const { user } = useAuth();

  // Cart count
  const cartItemCount =
    context?.state?.items?.reduce(
      (total: number, item: CartItem) => total + item.quantity,
      0
    ) || 0;

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-amber-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logo + Nav */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-amber-600"
            >
              <span className="material-symbols-outlined text-amber-600 text-3xl">
                ramen_dining
              </span>
              <span>TasteHaven</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/menu"
                className={`text-sm font-medium hover:text-amber-600 transition-colors ${
                  isActive("/menu") ? "text-amber-600" : ""
                }`}
              >
                Menu
              </Link>
              <Link
                to="/locations"
                className={`text-sm font-medium hover:text-amber-600 transition-colors ${
                  isActive("/locations") ? "text-amber-600" : ""
                }`}
              >
                Locations
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium hover:text-amber-600 transition-colors ${
                  isActive("/contact") ? "text-amber-600" : ""
                }`}
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Right side: Search + Buttons */}
          <div className="flex items-center gap-4">
            {/* Order Now */}
            <Link
              to="/menu"
              className="hidden md:block px-4 py-2 text-sm font-medium bg-amber-600 text-white rounded-full hover:bg-amber-600/90 transition-colors"
            >
              Order Now
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative hidden md:flex items-center justify-center px-2 py-2 text-xs font-medium bg-amber-600/20 rounded-full hover:bg-amber-600/40 transition-colors"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] bg-amber-600 text-white rounded-full px-2 py-1 font-semibold">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Auth */}
            {!user ? (
              <Link
                to="/login"
                className="hidden md:block px-4 py-2 text-sm font-medium bg-amber-600/20 rounded-full hover:bg-amber-600/40 transition-colors"
              >
                Sign In
              </Link>
            ) : (
              <Link to="/profile" className="hidden md:block">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-semibold">
                  {getInitials(user.displayName || user.email || "U")}
                </div>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
            >
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-white border-t border-amber-600/20 p-4 space-y-2 animate-slideDown z-40">
          {/* Main Nav Items */}
          {[
            { path: "/menu", label: "Menu" },
            { path: "/locations", label: "Locations" },
            { path: "/contact", label: "About Us" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm border-b border-amber-600/50 font-medium transition-colors ${
                isActive(item.path)
                  ? "bg-amber-600/80 text-white"
                  : "text-stone-700 active:bg-amber-100"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-lg border-b border-amber-600/50 text-sm font-medium transition-colors ${
              isActive("/cart")
                ? "bg-amber-600/80 text-white"
                : "text-stone-700 active:bg-amber-100"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span>Cart</span>
            </div>
            {cartItemCount > 0 && (
              <span className="ml-2 text-xs bg-white text-amber-600 rounded-full px-2 py-0.5 font-semibold">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Auth/Profile */}
          {!user ? (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm border-b border-amber-600/50 font-medium transition-colors ${
                isActive("/login")
                  ? "bg-amber-600/80 text-white"
                  : "text-stone-700 active:bg-amber-100"
              }`}
            >
              Sign In
            </Link>
          ) : (
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm border-b border-amber-600/50 font-medium transition-colors ${
                isActive("/profile")
                  ? "bg-amber-600/80 text-white"
                  : "text-stone-700 active:bg-amber-100"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-semibold">
                {getInitials(user.displayName || user.email || "U")}
              </div>
              <span>{user.displayName || "Profile"}</span>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
