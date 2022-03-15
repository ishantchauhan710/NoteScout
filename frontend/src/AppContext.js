import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

const AppContext = ({children}) => {

    const [openLoginModal,setOpenLoginModal] = useState(false);
    const [authTab,setAuthTab] = useState("1"); //1: Login, 2: Signup

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const [registerUsername,setRegisterUsername] = useState("");
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [registerConfirmPassword,setRegisterConfirmPassword] = useState("");
    const [registerProfilePicture,setRegisterProfilePicture] = useState("");

    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] = useState("");
    const [snackbarVariant,setSnackbarVariant] = useState("success");

    const [openNoteMarkdownModal,setOpenNoteMarkdownModal] = useState(false);


    const [noteContent,setNoteContent] = useState("");

    const [editNoteId,setEditNoteId] = useState("");

    const [viewNoteId,setViewNoteId] = useState("");
    
    

    
    const [loading,setLoading] = useState(false);


    return (
        <ContextProvider.Provider value={
            {openLoginModal,setOpenLoginModal,authTab,setAuthTab,loginEmail,setLoginEmail,loginPassword,setLoginPassword,message,setMessage,loading,setLoading,showMessage,setShowMessage,snackbarVariant,setSnackbarVariant,
                registerUsername,setRegisterUsername,registerEmail,setRegisterEmail,registerPassword,setRegisterPassword,registerConfirmPassword,setRegisterConfirmPassword,registerProfilePicture,setRegisterProfilePicture,
                openNoteMarkdownModal,setOpenNoteMarkdownModal,noteContent,setNoteContent,editNoteId,setEditNoteId,viewNoteId,setViewNoteId
        }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default AppContext;

export const AppState = () => {
    return useContext(ContextProvider);
}