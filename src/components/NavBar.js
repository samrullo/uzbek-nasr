import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ title }) => {
  const navigate = useNavigate();
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <Link className="navbar-brand" to="/">
        {title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mynavigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavigation">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item" key="isDarkMode">{isDarkMode? "Dark" : "Light"}</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
