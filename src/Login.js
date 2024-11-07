import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Função para validar o login
  const handleLogin = () => {
    const validUsername = 'administrador';
    const validPassword = '12345';

    if (username === validUsername && password === validPassword) {
      navigate('/estoque'); // Redireciona para a página de controle de estoque
    } else {
      setError('Usuário ou senha inválidos!');
    }
  };

  return (
    <div className="mainLogin">
      <div className="login-container">
        <div className="login-left">
          {/* Substitua pela imagem desejada */}
          <img src={require('./imagem.png')} alt="Imagem de login" />

        </div>
        <div className="login-right">
          <h2 className="login-title">Bem Vindo</h2>
          {error && <p className="error">{error}</p>}
          <div>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button className="buttonLogin" onClick={handleLogin}>Entrar</button>
          <p className="esqueciSenha">Esqueci minha senha</p>
          <div className="social-login">
  <p>Ou entre com</p>
  <div className="icons">
    <a href="#"><img src={require('./facebook-icon.png')} alt="Facebook" /></a>
    <a href="#"><img src={require('./google-icon.png')} alt="Google" /></a>
    <a href="#"><img src={require('./apple-icon.png')} alt="Apple" /></a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Login;
