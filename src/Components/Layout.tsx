import {ReactNode} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-white text-gray-900">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;