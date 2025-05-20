import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import  Footer  from "../components/Footer"
import NavbarMenu from "../components/Navbar"
import Body from "../components/Body"

import Jumbotron from "../components/Jumbotron"
import ListProduct from "./ListProducts"
import Products from "./Products"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <NavbarMenu />
            <Jumbotron/>
            <Body/>
            <Outlet/>
            <Footer />
 {/**           <ListProduct/>
            <Products/>*/}
        </ScrollToTop>
    )
}