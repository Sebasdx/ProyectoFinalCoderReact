import React from 'react';
import '../Components/itemlist.css';
import producto from '../img/Prod.png'; 

const ListaProductos = () => {
  return (
    <div className="card">
      <h1 className="titulo">Lista de Productos</h1>
      <div className="producto">
        <img src={producto} alt="Producto 1" className="imagen-producto" />
        <h2>Producto 1: descripcion</h2>
      </div>
      <div className="producto">
        <img src={producto} alt="Producto 2" className="imagen-producto" />
        <h2>Producto 2: descripcion</h2>
      </div>
      <div className="producto">
        <img src={producto} alt="Producto 3" className="imagen-producto" />
        <h2>Producto 3: descripcion</h2>
      </div>
      <div className="producto">
        <img src={producto} alt="Producto 4" className="imagen-producto" />
        <h2>Producto 4: descripcion</h2>
      </div>
    </div>
  );
}

export default ListaProductos;
