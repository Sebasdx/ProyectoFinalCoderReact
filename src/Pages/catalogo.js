import React from 'react';
import Navbar from '../Components/Navbar.js'; // Corrige la extensión del archivo a .jsx
import ListaProductos from '../Components/Itemlist.js'; // Asegúrate de importar correctamente ListaProductos

function Catalogo(){
  return (
    <div>
      <Navbar />
      <ListaProductos />
    </div>
  );
}

export default Catalogo;
