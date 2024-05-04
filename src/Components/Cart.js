import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import './css/cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleIncreaseQuantity = (id) => {
    increaseQuantity(id); // Inc
  };

  const handleDecreaseQuantity = (id) => {
    decreaseQuantity(id); // Dec
  };

  return (
    <div className='card-content'>
      <h2 className='cart-empty-h2'>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className='product-container'>
              <img src={item.imagen} alt={item.nombre} className='product-image' />
              <div className='product-details'>
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio}</p>
              </div>
              <div className='product-quantity'>
                <button className='button-quantity' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className='button-quantity' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className='delete-button' onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className='button-container'>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button>Realizar Pedido</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
