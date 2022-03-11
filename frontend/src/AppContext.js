import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

const AppContext = ({children}) => {

    const [openLoginModal,setOpenLoginModal] = useState(false);
    const [authTab,setAuthTab] = useState("1"); //1: Login, 2: Signup

    return (
        <ContextProvider.Provider value={{openLoginModal,setOpenLoginModal,authTab,setAuthTab}}>
            {children}
        </ContextProvider.Provider>
    )
}

export default AppContext;

export const AppState = () => {
    return useContext(ContextProvider);
}