import React from 'react';
import Navbar from '../Components/Navbar.js'; 
import ListaProductos from '../Components/Itemlist.js'; 

function Catalogo(){
  return (
    <div>
      <Navbar />
      <ListaProductos />
    </div>
  );
}

export default Catalogo;
