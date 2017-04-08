import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ProductData from './ProductData';
import CartAPI from './utils/CartAPI';


function main() {
  ProductData.init();
  CartAPI.getProductData();
}

main();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
