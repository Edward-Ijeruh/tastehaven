import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import ContactUs from "./Pages/ContactUs";
import Checkout from "./Pages/Checkout";
import { CartProvider } from "./Components/CartContext";
import { AuthProvider } from "./Components/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />

              {/* Protected Route: Only logged-in users can access Checkout */}
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              {/* Other routes(pages) will go here */}
            </Routes>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
