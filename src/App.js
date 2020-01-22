import React from 'react';
import './App.css';
import Layout from './Componants/Layout/Layout';
import BurgerBuilder from './Containers/Burger';

function App() {
  return (
    <div>
     <Layout><BurgerBuilder/>
       </Layout>
    </div>
  );
}

export default App;
