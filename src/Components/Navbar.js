import React from 'react';
import './css/navbar.css';
import logo from '../img/logo maniqui.jpg'; 
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="barra-navegacion">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo"/>
        <h2 className='nombre-tienda'>Tienda de Vestidos</h2> 
      </div>
      <ul className="lista-navegacion">
        <li className="item-lista"><Link to="/">Inicio</Link></li>
        <li className="item-lista"><Link to="/contacto">Contacto</Link></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default Navbar;
