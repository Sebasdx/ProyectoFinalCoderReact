/* import React from 'react';
import { Link } from 'react-router-dom';
import './catalogocard.css';

function CatalogoCard({ id, imageUrl, description }) { 
  return (
    <div className="catalog-card-container">
      <img src={imageUrl} alt="Product" className="catalog-card-image" />
      <div className="catalog-card-description">{description}</div>
      <Link to={`/descripcion-vestido/${id}`} className="catalog-card-button">Ver descripción</Link> 
    </div>
  );
}

export default CatalogoCard;
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './catalogocard.css';

function CatalogoCard({ id, imageUrl, nombres }) { 
  return (
    <div className="catalog-card-container">
      <img src={imageUrl} alt="Product" className="catalog-card-image" />
      <div className="catalog-card-description">{nombres}</div>
      <Link to={`/catalogo/vestido/${id}`} className="catalog-card-button">Ver descripción</Link>
    </div>
  );
}

export default CatalogoCard;
