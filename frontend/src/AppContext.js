import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

const AppContext = ({children}) => {

    const [openLoginModal,setOpenLoginModal] = useState(false);

    return (
        <ContextProvider.Provider value={{openLoginModal,setOpenLoginModal}}>
            {children}
        </ContextProvider.Provider>
    )
}

export default AppContext;

export const AppState = () => {
    return useContext(ContextProvider);
}