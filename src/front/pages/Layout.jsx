import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import  Footer  from "../components/Footer"
import NavbarMenu from "../components/Navbar"
import Body from "../components/Body";
import Jumbotron from "../components/Jumbotron"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <NavbarMenu />
            <Jumbotron/>
            <Body/>
            <Footer />
            <ListProduct/>
            <Products/>
        </ScrollToTop>
    )
}