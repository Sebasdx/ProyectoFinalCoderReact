import React from 'react';
import './modal.css';

const Modal = ({ orderId, closeModal }) => {
  
  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>¡Pedido realizado!</h2>
        <p>Tu pedido se realizó correctamente! </p>
        <p>Numero de pedido: {orderId}</p>
        <button onClick={() => { closeModal(); redirectToHome(); }}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal;
