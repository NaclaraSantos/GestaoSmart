import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Criação do root para renderizar a aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/GestaoSmart">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Medir performance da aplicação (opcional)
reportWebVitals();
