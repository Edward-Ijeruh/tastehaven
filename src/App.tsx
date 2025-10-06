import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Locations from "./Pages/Locations";
import Cart from "./Pages/Cart";
import ContactUs from "./Pages/ContactUs";
import { CartProvider } from "./Components/CartContext";
import { AuthProvider } from "./Components/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
//import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Routes WITHOUT layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Routes WITH layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/profile" element={<Profile />} />

              {/* Protected Route
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                  
                  </ProtectedRoute>
                }
              /> */}
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
