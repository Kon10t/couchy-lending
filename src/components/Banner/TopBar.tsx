import React from "react";
import Logo from "./Img/Logo.jpg";

export default function TopBar() {


  return (
    <div className="top-bar">
      <div className="logo">
        <img src={Logo} alt="BannerLogo" />
      </div>
      <div className="nav-menu">
        <ul className="menu-ul">
          <li>Home</li>
          <li>About Us</li>
          <li>Collection</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="login">
        <button type="button" value="Log In" className="login-btn btn-green"><span>Log In</span></button>
      </div>
    </div>
  )
}