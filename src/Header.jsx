import React from "react";
import "./Style.css";

function Header() {
  return (
    <div>
      {/* <!-- header section starts  --> */}

      <header>
        <a href="#" class="logo">
          <span>real</span>Estate
        </a>

        <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#featured">Featured</a>
          <a href="#agents">Agents</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="icons">
          <div id="menu-bars" class="fas fa-bars"></div>
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-user"></a>
        </div>
      </header>
    </div>
  );
}

export default Header;
