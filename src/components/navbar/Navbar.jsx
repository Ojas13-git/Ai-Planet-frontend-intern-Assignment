import React from "react";
import { AIPlanetLogo } from "../../assets"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="margin_set navbar">
      <Link to='/' onClick={() => {window.scrollTo(0, 0); }}  >
        <img className="navbar_image"  src={AIPlanetLogo} alt='logo'/>
      </Link>
    </nav>
  );
};

export default Navbar;
