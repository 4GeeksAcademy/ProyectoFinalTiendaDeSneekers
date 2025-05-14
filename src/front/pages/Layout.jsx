import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import NavbarMenu from "../components/Navbar"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <NavbarMenu />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}