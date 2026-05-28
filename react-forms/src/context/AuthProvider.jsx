import {createContext, useContext, useEffect, useState} from "react";
import {apiRequest} from "../lib/axiosInstance.js";
import {useNavigate} from "react-router";

const AuthContext = createContext();

function AuthProvider({children}) {
    const useNav = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        validateToken();
    }, [])

    async function validateToken() {
        const savedToken = localStorage.getItem("token");

        if (!savedToken) {
            return;
        }
        // const response = await apiRequest({
        //     method: 'GET',
        //     path: "/api/user/me",
        //     headers: {
        //         Content: "application/json",
        //         Authorization: `Bearer ${savedToken}`
        //     }
        // });
        // if (response.token) {
        //     setToken(response.token);
        //     setIsAuthenticated(true);
        // } else {
        //     setToken(null);
        //     setIsAuthenticated(false);
        //     useNav("/login");
        // }

    }

    function login(token) {
        localStorage.setItem("token", token);
        setToken(token);
        setIsAuthenticated(true);
        useNav("/profile");
    }

    function logout() {
        localStorage.removeItem("token");
        setToken(null);
    }

    const value = {
        token, login, logout, isAuthenticated
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export function useAuth() {
    return useContext(AuthContext);
}
