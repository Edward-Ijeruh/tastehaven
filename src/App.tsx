import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
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
                            {/* Other routes(pages) will go here */}
                        </Routes>
                    </Layout>
                </CartProvider>
            </Router>
    )
}

export default App;