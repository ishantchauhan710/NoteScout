import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

const AppContext = ({children}) => {

    const [openLoginModal,setOpenLoginModal] = useState(false);
    const [authTab,setAuthTab] = useState("1"); //1: Login, 2: Signup

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] = useState("");
    const [snackbarVariant,setSnackbarVariant] = useState("success");

    
    const [loading,setLoading] = useState(false);


    return (
        <ContextProvider.Provider value={{openLoginModal,setOpenLoginModal,authTab,setAuthTab,loginEmail,setLoginEmail,loginPassword,setLoginPassword,message,setMessage,loading,setLoading,showMessage,setShowMessage,snackbarVariant,setSnackbarVariant}}>
            {children}
        </ContextProvider.Provider>
    )
}

export default AppContext;

export const AppState = () => {
    return useContext(ContextProvider);
}