import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para armazenar as mercadorias
  const [mercadorias, setMercadorias] = useState([]);
  // Estado para os dados do formulário
  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [quantidadeVendida, setQuantidadeVendida] = useState('');

  // Função para adicionar uma nova mercadoria
  const adicionarMercadoria = () => {
    if (!produto || !preco || !quantidade) return;
    setMercadorias([
      ...mercadorias,
      { produto, preco: parseFloat(preco), quantidade: parseInt(quantidade), quantidadeVendida: 0 }
    ]);
    setProduto('');
    setPreco('');
    setQuantidade('');
  };

  // Função para dar baixa nas mercadorias vendidas
  const darBaixa = (index) => {
    const novaMercadoria = [...mercadorias];
    const mercadoria = novaMercadoria[index];
    
    if (quantidadeVendida && quantidadeVendida <= mercadoria.quantidade - mercadoria.quantidadeVendida) {
      novaMercadoria[index].quantidadeVendida += parseInt(quantidadeVendida);
      setMercadorias(novaMercadoria);
      setQuantidadeVendida('');
    } else {
      alert('Quantidade vendida maior do que a disponível');
    }
  };

  // Função para calcular o estoque e valor total
  const calcularEstoque = () => {
    let totalEstoque = 0;
    let valorTotal = 0;
    mercadorias.forEach((mercadoria) => {
      const estoqueRestante = mercadoria.quantidade - mercadoria.quantidadeVendida;
      totalEstoque += estoqueRestante;
      valorTotal += estoqueRestante * mercadoria.preco;
    });
    return { totalEstoque, valorTotal };
  };

  // Exibição do estoque e valor total
  const { totalEstoque, valorTotal } = calcularEstoque();

  return (
    <div className=''>
    <div className="App">
      <h1 className='title'>GestãoSmart</h1>
      {/* Formulário para cadastrar mercadorias */}
      <div className='main'>
        <h2>Cadastrar Mercadoria</h2>
       
        <input
          type="text"
          placeholder="Nome do produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <button onClick={adicionarMercadoria}>Cadastrar</button>
      </div>

      {/* Tabela de mercadorias cadastradas */}
      <div className='mercadorias'>
        <h2>Mercadorias Cadastradas</h2>
        {mercadorias.length === 0 ? (
          <p>Nenhuma mercadoria cadastrada.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Vendidas</th>
                <th>Estoque Restante</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {mercadorias.map((mercadoria, index) => (
                <tr key={index}>
                  <td>{mercadoria.produto}</td>
                  <td>R${mercadoria.preco.toFixed(2)}</td>
                  <td>{mercadoria.quantidade}</td>
                  <td>{mercadoria.quantidadeVendida}</td>
                  <td>{mercadoria.quantidade - mercadoria.quantidadeVendida}</td>
                  <td>
                    <input
                      type="number"
                      placeholder="Quantidade vendida"
                      value={quantidadeVendida}
                      onChange={(e) => setQuantidadeVendida(e.target.value)}
                    />
                    <button onClick={() => darBaixa(index)}>Dar Baixa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Exibição do total de estoque e valor */}
      <div className='resumoEstoque'>
        <h2>Resumo do Estoque</h2>
        <p>Total de mercadorias restantes: {totalEstoque}</p>
        <p>Valor total das mercadorias restantes: R${valorTotal.toFixed(2)}</p>
      </div>
    </div>
    </div>
  );
  
}

export default App;
