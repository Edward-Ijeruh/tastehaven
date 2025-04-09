import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import ContactUs from "./Pages/ContactUs";
import Checkout from "./Pages/Checkout";
import {CartProvider} from "./Components/CartContext";

function App() {
    return (
        
            <Router>
                <CartProvider>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/contact" element={<ContactUs />} />
                            {/* Other routes(pages) will go here */}
                        </Routes>
                    </Layout>
                </CartProvider>
            </Router>
    )
}

export default App;