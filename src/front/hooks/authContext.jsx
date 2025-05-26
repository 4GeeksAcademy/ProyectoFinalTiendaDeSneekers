import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setCart([]);
        localStorage.removeItem("token");
    };
    const setUserData = (userData) => setUser(userData);
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        console.log(cart)
    }

    useEffect(() => {

        const checkToken = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/authorization`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
                //user.carrito.items
                if (res.status === 200) {
                    const data = await res.json();
                    setUser(data.user);
                    setIsAuthenticated(true);
                    setCart(data.user.carrito.items);
                }
                setIsAuthenticated(true);

            } catch (err) {
                console.error("Token inválido o expirado", err);
                logout();
            }
        };

        checkToken();
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, cart , login, logout, setUserData, addToCart }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return useContext(AuthContext);
}