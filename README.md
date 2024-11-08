# GestãoSmart

GestãoSmart é um sistema de gerenciamento de estoque desenvolvido em React. Ele permite realizar o cadastro de mercadorias, atualizar preços e quantidades, controlar o estoque e calcular o valor total das mercadorias disponíveis. O objetivo é facilitar a gestão de produtos e automatizar processos que envolvem a administração de estoques.

## Funcionalidades

- **Cadastro de Mercadorias**: Possibilidade de cadastrar novas mercadorias no sistema.
- **Atualização de Estoque**: Controle de quantidades e ajuste de preços das mercadorias.
- **Movimentação de Estoque**: Controle de entradas e saídas de mercadorias.
- **Cálculo do Valor Total**: Cálculo do valor total dos produtos em estoque.
- **Listagem e Visualização**: Exibição de mercadorias cadastradas para fácil consulta.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Axios**: Biblioteca para fazer requisições HTTP para APIs.
- **Express.js**: Framework de backend para construção de APIs RESTful.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

1. **Frontend (React)**: Localizado na pasta raiz do projeto, é onde toda a interface de usuário é desenvolvida. Ele consome dados da API para exibir informações sobre as mercadorias e controlar as operações de estoque.
   
2. **Backend (Node.js + Express)**: Responsável pelo gerenciamento da lógica de negócios e das rotas de API. O backend processa as requisições do frontend e responde com dados para exibição e manipulação no sistema.

## Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados.
- Configuração do servidor backend para comunicação com o frontend.

### Passos para Executar

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/NaclaraSantos/GestaoSmart.git
   cd GestaoSmart


