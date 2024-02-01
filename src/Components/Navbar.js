import React from 'react';
import './navbar.css';
import logo from '../img/unnamed.png'; 
import CardWidget from './CardWidget.js';

const Navbar = () => {
  return (
    <nav className="barra-navegacion">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo"/>
        <h2 className='nombre-tienda'>Tienda de Objetos</h2> 
      </div>
      <ul className="lista-navegacion">
        <li className="item-lista"><a className="enlace" href="/">Inicio</a></li>
        <li className="item-lista"><a className="enlace" href="/acerca">Acerca</a></li>
        <li className="item-lista"><a className="enlace" href="/servicios">Servicios</a></li>
        <li className="item-lista"><a className="enlace" href="/contacto">Contacto</a></li>
        <CardWidget number={5} /> {}
      </ul>
    </nav>
  );
}

export default Navbar;
