import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
import './css/cardwidget.css';

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <Link to="/carrito" className="card-widget-link">
      <div className="card-widget">
        <span className="number">{getTotalQuantity}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
