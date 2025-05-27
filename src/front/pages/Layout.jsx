import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import Footer from "../components/Footer"
import NavbarMenu from "../components/Navbar"
import { useAuth } from "../hooks/authContext"
import { Button } from "react-bootstrap"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { user } = useAuth()
    return (
        <ScrollToTop>
            <NavbarMenu />
            <Outlet />
            {user?.role === "SuperAdmin" ? 
            <Button
                variant="primary"
                className="position-fixed bottom-0 end-0 m-3"
                onClick={() => window.location.href = "/admin"}
            >
                Añadir
            </Button>
            : null
        }
            <Footer />
            {/**          <ListProduct/>
            <Products/>*/}
        </ScrollToTop>
    )
}