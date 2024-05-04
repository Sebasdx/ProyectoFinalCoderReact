import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase.js';
import CatalogoCard from './CatalogoCard';
import './css/todosVestidos.css';

function TodosVestidos() {
  const [vestidos, setVestidos] = useState([]);
  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, 'Vestidos'));
      const vestidosData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVestidos(vestidosData);
    };

    fetchData();
  }, []);

  const handleFiltro = tipo => {
    setFiltro(tipo);
  };

  const vestidosFiltrados = filtro ? vestidos.filter(vestido => vestido.tipo === filtro) : vestidos;

  return (
    <div>
      <div className="filtro-buttons">
        <button onClick={() => setFiltro(null)}>Todos</button>
        <button onClick={() => handleFiltro('noche')}>Noche</button>
        <button onClick={() => handleFiltro('formales')}>Formales</button>
        <button onClick={() => handleFiltro('casuales')}>Casuales</button>
      </div>
      <div className="card">
        {vestidosFiltrados.map(vestido => (
          <div className="producto" key={vestido.id}>
            <CatalogoCard
              id={vestido.id} 
              imageUrl={vestido.imagen}
              nombres={vestido.nombre}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodosVestidos;
