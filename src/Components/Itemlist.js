/* import React from 'react';
import '../Components/itemlist.css';
import CatalogoCard from '../Components/CatalogoCard';
import "../img/Vestido 2.jpg"
function ListaProductos(){
  return (
    <div className="card">
      <div className="producto">
        <CatalogoCard
          imageUrl="https://www.rapsodia.com.ar/media/catalog/product/9/5/95705_rapsodia_11115025162i_01_1.jpg?quality=100&fit=bounds&height=900&width=600"
          description="Vestido Short Zebra"
          />
      <div className="producto">
          </div>
        <CatalogoCard
          imageUrl="https://www.rapsodia.com.ar/media/catalog/product/9/5/95618_rapsodia_11115025223i_01_1.jpg?quality=100&fit=bounds&height=900&width=600"
          description="Vestido Sakura Japo"
        />
      </div>
      <div>
      <CatalogoCard
          imageUrl="https://www.rapsodia.com.ar/media/catalog/product/9/4/94523_rapsodia_11115025242c_01_1.jpg?quality=100&fit=bounds&height=1800&width=1200" 
          description="VESTIDO AMELIE"
        />
      </div>
    </div>

  );
}

export default ListaProductos; 
 */

import React from 'react';
import '../Components/itemlist.css';
import CatalogoCard from '../Components/CatalogoCard.js';
import vestidosData from '../data/vestidos.json'; 

function ListaProductos(){
  return (
    <div className="card">
      {vestidosData.vestidos.map(vestido => (
        <div className="producto" key={vestido.id}>
          <CatalogoCard
            id={vestido.id} 
            imageUrl={vestido.imagenUrl}
            nombres={vestido.nombre}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaProductos;

