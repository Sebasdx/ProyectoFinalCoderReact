import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import vestidosData from '../data/vestidos.json'; 
import './descripcionvestido.css';

function DescripcionVestido() {
    const { id } = useParams();
    const [vestido, setVestido] = useState(null);
  
    useEffect(() => {
      const vestidoEncontrado = vestidosData.vestidos.find(v => v.id === parseInt(id));
      setVestido(vestidoEncontrado);
    }, [id]);
  
    if (!vestido) {
      return <div className="descripcion-vestido-container">Cargando...</div>;
    }
  
    return (
      <div className="descripcion-vestido-container">
        <div>
          <h2>{vestido.nombre}</h2>
          <p>{vestido.descripcion}</p>
          <p>Precio: ${vestido.precio}</p>
          <button className='carrito'>Agregar prenda al carrito</button>
        </div>
        <div>
          <img src={vestido.imagenUrl} alt={vestido.nombre} />
        </div>
      </div>
    );
  }
  
  export default DescripcionVestido; 