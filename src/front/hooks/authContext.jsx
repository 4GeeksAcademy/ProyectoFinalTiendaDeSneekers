import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("token");
    };
    const setUserData = (userData) => setUser(userData);
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("token");
            console.log("Token:", token);
            if (!token) return;

            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/authorization`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    console.log("Datos del usuario:", data);
                    setUser(data.user);
                    setIsAuthenticated(true);

                }
                setIsAuthenticated(true);
                
            } catch (err) {
                console.error("Token inválido o expirado", err);
                logout();
            }
        };

        checkToken();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, setUserData }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return useContext(AuthContext);
}