import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <div className="font-sans mx-4 lg:mx-32 md:mx-16">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
