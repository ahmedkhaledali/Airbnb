import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Navbare  from './composants/Navbare';
import Recherche from './composants/Card1';
import Recherche1 from './composants/Card2';
import Cov from './composants/cov';
import Recherche2 from './composants/Card3';
import Recherche3 from './composants/footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbare />
    <Recherche />
    <Recherche1 />
    <Cov />
    <Recherche2 />
    <Recherche3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
