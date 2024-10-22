import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null
    });
    useEffect(() => {
        let userLoginData = JSON.parse(localStorage.getItem('user'));
        setAuth({
            ...auth,
            user: userLoginData
        })
    }, []);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => {
    return useContext(AuthContext);
}
export { AuthProvider, useAuth };