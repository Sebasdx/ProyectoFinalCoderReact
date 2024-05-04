import React from 'react';
import Navbar from '../Components/Navbar.js';
import TodosVestidos from '../Components/TodosVestidos.js';

function Home() {
  return (
    <div>
      <Navbar/>
      <TodosVestidos/>
    </div>
  );
}

export default Home;