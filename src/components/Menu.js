import React from "react";
import '../styles/Menu.css';
function Menu() {
  return (
    <header className="header-box">
      <div className="menu-container">
        <h1>PelisOne</h1>
        <nav className="nav-box">
          <ul>
            <li>
              <a href="#">INICIO</a>
            </li>
            <li>
              <a href="#">GENERO</a>
            </li>
            <li>
              <a href="#">AÑO</a>
            </li>
            <li>
              <a href="#">CALIDAD</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Menu;