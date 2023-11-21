import React from 'react';
import ProductList from './Copmponents/ProductList';
import './App.css'




const App = () => {

  return (
    <div className="app">
      <header>
        <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          Нажмите для прокрутки
        </button>
      </header>
      <ProductList/>

      <footer>{ }</footer>
    </div>                
  );
};

export default App;


