import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ title }) => {
  const navigate = useNavigate();
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <nav
      className={
        isDarkMode
          ? `navbar navbar-expand-lg bg-dark navbar-dark`
          : `navbar navbar-expand-lg bg-light navbar-light`
      }
    >
      <Link className="navbar-brand" to="/">
        {title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavigation">
        <Link to="/" className="nav-link">
          Kitoblar
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
