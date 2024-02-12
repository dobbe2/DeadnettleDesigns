import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Navbar from './components/nav-bar'
import Hero from './components/hero';
import ProductGrid from './components/product-grid'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <ProductGrid />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
