import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [login, setLogin] = useState(
        localStorage.getItem("login")? true : false
    );
    const [userInfo, setUserInfo] = useState(
        localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : {}
    );

    const handleLogin = (userData) => {
        setLogin(true);
        localStorage.setItem("login", "true");
        setUserInfo(userData);
        localStorage.setItem("userInfo", JSON.stringify(userData));
    }
    const handleLogout = () => {
        setLogin(false);
        localStorage.removeItem("login");
        setUserInfo({});
        localStorage.removeItem("userInfo");
    }
    return(
        <AuthContext.Provider 
        value={{ login, handleLogin, handleLogout, userInfo }}
        >
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;

export const useAuthContext = () => {
    return useContext(AuthContext);
}