import React from 'react';
// biblioteca que utilizamos para construir interfaces.
import ReactDOM from 'react-dom/client';
// responsável por conectar nossa aplicação React ao HTML do navegador.
import './index.css';
import PokeTela from './PokeTela';



const root = ReactDOM.createRoot(document.getElementById('root'));
// document.getElementById('root'): procura no HTML o elemento que possui o identificador root.
// ReactDOM.createRoot(): prepara esse elemento para receber a aplicação React.
root.render(
// O método render() coloca nossa aplicação na página. O root é a constante acima

  <React.StrictMode>
    <PokeTela />
  </React.StrictMode>
);


