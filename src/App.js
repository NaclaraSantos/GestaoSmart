import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Importando dependências do React Router
import Login from './Login'; // Tela de login
import Estoque from './Estoque'; // Tela de controle de estoque

function App() {
  return (
    <Routes> {/* Definindo as rotas */}
      <Route path="/" element={<Login />} />  {/* Rota para o Login */}
      <Route path="/estoque" element={<Estoque />} />  {/* Rota para o Controle de Estoque */}
    </Routes>
  );
}

export default App;
