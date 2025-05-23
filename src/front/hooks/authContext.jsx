import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) { 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
    const setUserData = (userData) => setUser(userData);
    return (
        <AuthContext.Provider value={{ isAuthenticated , user , login, logout,setUserData }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
  return useContext(AuthContext);
}