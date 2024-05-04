import React from 'react';
import { Link } from 'react-router-dom';
import './css/catalogocard.css';

function CatalogoCard({ id, imageUrl, nombre }) { 
  return (
    <div className="catalog-card-container">
      <img src={imageUrl} alt="Product" className="catalog-card-image" />
      <div className="catalog-card-description">{nombre}</div>
      <Link to={`/catalogo/vestido/${id}`} className="catalog-card-button">Ver Descripcion</Link>
    </div>
  );
}

export default CatalogoCard;
