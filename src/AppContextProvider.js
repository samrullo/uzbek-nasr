import React from "react";
import { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [bookTitle, setBookTitle] = useState("");
    const isLocalhost = window.location.hostname === "localhost";
    const baseURL = isLocalhost ? "" : "/uzbek-nasr"

    const contextValues = { isDarkMode, setIsDarkMode, baseURL, bookTitle, setBookTitle }

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}

export default AppContextProvider;