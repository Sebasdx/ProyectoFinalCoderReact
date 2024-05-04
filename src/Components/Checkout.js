import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { db } from '../config/firebase'; 
import { addDoc, collection } from 'firebase/firestore'; 
import './css/checkout.css'; 
import Modal from '../Style/modal'; 

function Checkout() {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    confirmarEmail: '',
    telefono: '', 
    comentarios: ''
  });
  const [orderId, setOrderId] = useState(null);
  const [showModal, setShowModal] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkoutData = {
      formData: formData,
      productos: cart.map(item => ({ nombre: item.nombre, cantidad: item.quantity })),
      total: calcularTotal()
    };

    try {
      const docRef = await addDoc(collection(db, 'Checkout'), checkoutData);

      setOrderId(docRef.id);
      setShowModal(true);
    } catch (error) {
      console.error('Error al agregar el documento: ', error);
      alert('Hubo un error al procesar tu pedido. Por favor, intenta nuevamente.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="checkout-container"> 
      <h2 className="checkout-header">Checkout</h2> 
      <div className="checkout-summary"> 
        <h3>Resumen de la compra:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <span className='span-name'>{item.nombre}</span>
              <span className='span-cant'>Cantidad: {item.quantity}</span>
              <span className='span-precio-u'>Precio unitario: ${item.precio}</span>
            </li>
          ))}
        </ul>
        <p>Total: ${calcularTotal()}</p>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </label>
        <label>
          Apellido:
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </label>
        <label>
          Telefono:
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required /> {/* Usa type="tel" para el teléfono */}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Confirmar Email:
          <input type="email" name="confirmarEmail" value={formData.confirmarEmail} onChange={handleChange} required />
        </label>
        <label>
          Comentarios:
          <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} />
        </label>
        <button type="submit">Realizar Pedido</button>
      </form>
      {showModal && <Modal orderId={orderId} closeModal={closeModal} />}
    </div>
  );
}

export default Checkout;
