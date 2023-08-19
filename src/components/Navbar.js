import React from "react";
import "../stylesheets/Navbar.css"; // Importa tu hoja de estilo

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/about">Acerca de</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
