import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

const AppContext = ({children}) => {

    const [openLoginModal,setOpenLoginModal] = useState(false);
    const [authTab,setAuthTab] = useState("1"); //1: Login, 2: Signup

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);

    return (
        <ContextProvider.Provider value={{openLoginModal,setOpenLoginModal,authTab,setAuthTab,loginEmail,setLoginEmail,loginPassword,setLoginPassword,setError,loading,setLoading}}>
            {children}
        </ContextProvider.Provider>
    )
}

export default AppContext;

export const AppState = () => {
    return useContext(ContextProvider);
}