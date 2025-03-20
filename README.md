**Sistema de Gerenciamento de Clientes, Pedidos e Produtos**

📌**Descrição**

Este projeto é uma aplicação web desenvolvida em Node.js com Express e Sequelize, que permite o gerenciamento de clientes, pedidos e produtos. O sistema conta com funcionalidades de CRUD (Criar, Ler, Atualizar e Deletar) para cada uma dessas entidades, além de um sistema de autenticação de usuário.

🚀 **Tecnologias Utilizadas**

Node.js

Express.js

Sequelize (ORM para MySQL)

EJS (Template Engine)

JavaScript (ES6+)

Banco de Dados MySQL

📂 **Estrutura do Projeto**

📌 **Funcionalidades**

🔹 Clientes

Listar todos os clientes

Visualizar detalhes de um cliente

Criar novo cliente

Editar um cliente existente

Deletar um cliente

🔹 Pedidos

Listar todos os pedidos

Visualizar detalhes de um pedido

Criar novo pedido

Editar um pedido existente

Deletar um pedido

🔹 Produtos

Listar todos os produtos

Visualizar detalhes de um produto

Criar novo produto

Editar um produto existente

Deletar um produto

🔹 Autenticação

Login de usuário

Redirecionamento para a página de clientes após login

🛠️ **Configuração e Instalação**

1️⃣ Clonar o repositório: https://github.com/NataschaFritzen/ModuloNodeCalculo.git

2️⃣No terminal do Vs Code:

Entre na pasta app_expressjs: cd app_expressjs

3️⃣ Instalar dependências
Ainda dentro da pasta app_expressjs, execute: npm install

4️⃣ Configurar o banco de dados

🔹 Verificar MySQL

Certifiquese de que você tem o MySQL instalado e rodando. Se ainda não tiver, pode instalar pelo site oficial: Baixar MySQL

🔹 Criar o banco de dados

Abra o MySQL e execute o seguinte comando para criar o banco de dados: CREATE DATABASE expressdb;

5️⃣ Iniciar o servidor

Dentro da pasta app_expressjs, execute um dos seguintes comandos no terminal do VS Code: npm start

Se tudo estiver certo, o servidor estará rodando em: 🔗 http://localhost:3000

🔗**Rotas**

Clientes

1️⃣Página inicial login: http://localhost:3000

2️⃣Editar cliente: http://localhost:3000/clients/edit/(inserir id)

3️⃣Exibe os detalhes de um cliente específico: http://localhost:3000/clients/(inserir id)

4️⃣Exclui um cliente específico: http://localhost:3000/clients/del/(inserir id)

Pedidos

1️⃣Exibe todos os pedidos: http://localhost:3000/pedidos

2️⃣Exibe o formulário para criar um novo pedido: http://localhost:3000/pedidos/novo

3️⃣Exibe os detalhes de um pedido específico.: http://localhost:3000/pedidos/(inserir id)

4️⃣Exclui um pedido específico.: http://localhost:3000/pedidos/excluir/(inserir id)

Produtos

1️⃣Exibe a lista de todos os produtos: http://localhost:3000/produtos

2️⃣Exibe o formulário para criar um novo produto.: http://localhost:3000/produtos/create

3️⃣Exibe o formulário para editar um produto específico: http://localhost:3000/produtos/edit/(inserir id)

4️⃣ Exclui um produto específico: /produtos/del/(inserir id)

Estas são apenas algumas das rotas principais. Para conferir todas as rotas configuradas no projeto, acesse a pasta **Router**. Lá, você encontrará todos os arquivos responsáveis pelo mapeamento completo das rotas da aplicação

📄 **Licença / Créditos**

Este projeto foi desenvolvido durante o curso de Back-End. O conteúdo e os conceitos foram aplicados e aprimorados ao longo do desenvolvimento de um sistema completo utilizando Node.js, Express, MySQL e outras tecnologias de Back-End.



