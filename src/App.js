import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'; 
import ListaProductos from './Components/Itemlist.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <ListaProductos />
    </div>
  );
}

export default App;
