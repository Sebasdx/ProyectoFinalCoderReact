import React from 'react';
import { Link } from 'react-router-dom';
import './cardwidget.css';

function CardWidget({ number }) {
  return (
    <Link to="/carrito" className="card-widget-link">
      <div className="card-widget">
        <span className="number">{number}</span>
      </div>
    </Link>
  );
}

export default CardWidget;