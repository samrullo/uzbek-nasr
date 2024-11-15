import React, { useContext } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../AppContext";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";

const MainPage = () => {
    const { isDarkMode, setIsDarkMode, baseURL } = useContext(AppContext)

    return (
        <BrowserRouter>
            <div className="container mt-5">
                <header>
                    <NavBar title="Uzbek Nasri" />
                </header>
                <AppRoutes />
            </div>
        </BrowserRouter>
    )
}

export default MainPage;