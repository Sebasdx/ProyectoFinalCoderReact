import React, { useState, useEffect, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';
import { CartContext } from '../Context/CartContext';
import './css/itemDetail.css';

function DescripcionVestido() {
    const { id } = useParams();
    const [vestido, setVestido] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [vestidoNoEncontrado, setVestidoNoEncontrado] = useState(false);
  
    useEffect(() => {
        const fetchVestido = async () => {
            try {
                const docRef = doc(db, 'Vestidos', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setVestido({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setVestidoNoEncontrado(true);
                }
            } catch (error) {
                console.error('Error al obtener el vestido:', error);
                setVestidoNoEncontrado(true);
            }
        };

        fetchVestido();
    }, [id]);
  
    if (vestidoNoEncontrado) {
        return <Navigate to="/error" />;
    }

    if (!vestido) {
        return <div className="descripcion-cargando">Cargando...</div>;
    }
  
    const handleAddToCart = () => {
        addToCart(vestido);
    };
  
    return (
      <div className="descripcion-vestido-container">
          <div className="imagen">
              <img src={vestido.imagen} alt={vestido.nombre} />
          </div>
          <div className="texto">
              <h2>{vestido.nombre}</h2>
              <p>{vestido.descripcion}</p>
              <p>Precio: ${vestido.precio}</p>
              <button className='carrito' onClick={handleAddToCart}>Agregar prenda al carrito</button>
          </div>
      </div>
  );
}

export default DescripcionVestido;
