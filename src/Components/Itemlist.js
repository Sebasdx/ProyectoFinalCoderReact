import React from 'react';
import CatalogoCard from './CatalogoCard.js';

function ListaProductos({ vestidos }) {
  return (
    <div className="card">
      {vestidos.map(vestido => (
        <div className="producto" key={vestido.id}>
          <CatalogoCard
            id={vestido.id} 
            imageUrl={vestido.imagen}
            nombre={vestido.nombre}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaProductos;
