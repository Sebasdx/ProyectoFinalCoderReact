// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalogo from './Pages/catalogo';
import Home from './Pages/Home';
import Nosotros from './Pages/nosotros';
import Carrito from './Pages/carrito';
import Contacto from './Pages/contacto';
import Descripcion from './Pages/Descripcion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/catalogo/vestido/:id" element={<Descripcion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

