import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Home from './Pages/Home';
import Carrito from './Pages/carrito'; 
import Descripcion from './Pages/Descripcion';
import Checkout from './Pages/Checkout';
import Contacto from './Pages/Contacto'; 
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/catalogo/vestido/:id" element={<Descripcion />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
