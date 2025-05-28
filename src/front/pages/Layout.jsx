import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import Footer from "../components/Footer"
import NavbarMenu from "../components/Navbar"
import { useAuth } from "../hooks/authContext"
import { Button } from "react-bootstrap"
import ModalProduct from "../components/Modal"
import { useState } from "react"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { user } = useAuth()
    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
        setSelectedProduct(null);
    };
    return (
        <ScrollToTop>
            <NavbarMenu />
            <Outlet />
            {user?.role === "SuperAdmin" ?
                <>
                    <Button
                        variant="primary"
                        className="position-fixed bottom-0 end-0 m-3"
                        onClick={() => handleOpenModal()}
                    >
                        añadir
                    </Button>
                    <ModalProduct
                        product={selectedProduct}
                        show={modalShow}
                        onHide={handleCloseModal}
                    />
                </>

                : null
            }
            <Footer />
            {/**          <ListProduct/>
            <Products/>*/}
        </ScrollToTop>
    )
}