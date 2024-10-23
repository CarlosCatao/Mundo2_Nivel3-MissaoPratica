<img src="./src/assets/images/logoEstacio.png" align="left" height="64px" /><br><br>
# Curso: Desenvolvimento Full Stack
## Mundo 2 - Nível 3 - Missão Prática

## Projeto: Livros Next

Este é um projeto didático com fins de criar uma aplicação web desenvolvida com Next.js e TypeScript para gerenciar um catálogo de livros. O aplicativo se comunica com uma API interna para realizar operações *CRUD (Create, Read, Update, Delete)* sobre livros e editoras.

## Objetivos do Projeto


* Explorar a ciação de um *front-end* baseado em **Next JS**;
* Definição e manipulação de **API HTTP** interna.

## Estrutura do Projeto

![Estrutura](src/assets/images/Estrutura.png)
<br> 
 
## Requisitos

- Next JS (versão 13.5.7 ou superior)
- Node JS (verão 10.9.0 ou superior)
- bootstrap (verão 5.3.3 ou superior)
- react (verão 18 ou superior)

## Tecnologias Utilizadas
<br>
<img src="./src/assets/images/Bootstrap.png" align="left" height="25px" />:  Bootstrap para facilitar o design *responsivo* e garantir que o site seja amigável em dispositivos móveis.<br>
<img src="./src/assets/images/VisualStudio-Dark.png" align="left" height="25px" />: Editor de código utilizado no desenvolvimento.<br>
<img src="./src/assets/images/Github-Dark.png" align="left" height="25px" />: Para armazenamento dos códigos e controle de versões.<br>
<img src="./src/assets/images/NodeJS-Dark.png" align="left" height="25px" />: O Node.js é uma plataforma de desenvolvimento que permite interpretar código JavaScript e executar aplicações do lado do servidor.<br>
<img src="./src/assets/images/NextJS-Dark.png" align="left" height="25px" />: O Next.js é um framework que permite criar aplicações web e sites fullstack com React e JavaScript.<br>
<img src="./src/assets/images/React-Dark.png" align="left" height="25px" />: React é um framework JavaScript que é usado para criar interfaces de usuário (UI) em aplicativos web.<br>
<img src="./src/assets/images/json.png" align="left" height="25px" />: Formato de dados utilizado para troca de informações.<br>

## Organização do código e Funcionalidades: 

### APIs
<div style="display: flex; align-items: center;">

  <img src="./src/assets/images/square.png" alt="Descrição da Imagem" style="width: 8px; margin-right: 20px;"/>

  <div>
    <h3>Editoras</h3>
    <p></p>
  </div>

</div>

GET /api/editoras: Retorna uma lista de editoras.<br> 
GET /api/editoras/[codEditora]: Retorna os detalhes de uma editora específica.

<div style="display: flex; align-items: center;">

  <img src="./src/assets/images/square.png" alt="Descrição da Imagem" style="width: 8px; margin-right: 20px;"/>

  <div>
    <h3>Livros</h3>
    <p></p>
  </div>

</div>
GET /api/livros: Retorna uma lista de livros.<br>
POST /api/livros: Adiciona um novo livro.<br>
DELETE /api/livros/[codigo]: Exclui um livro específico.

### Componentes
<div style="display: flex; align-items: center;">

  <img src="./src/assets/images/square.png" alt="Descrição da Imagem" style="width: 8px; margin-right: 20px;"/>

  <div>
    <h3>Menu</h3>
    <p></p>
  </div>

</div>
Componente de menu de navegação, implementado utilizando o Bootstrap e next/link para navegação entre as páginas.
<div style="display: flex; align-items: center;">

  <img src="./src/assets/images/square.png" alt="Descrição da Imagem" style="width: 8px; margin-right: 20px;"/>

  <div>
    <h3>LinhaLivro</h3>
    <p></p>
  </div>

</div>
Componente que exibe as informações de um livro e inclui a funcionalidade para excluir o livro.


### Iniciar o Servidor

npm run dev

### Para Testar as APIs

Para testar a API, inicie o servidor com npm run dev e acesse:

http://localhost:3000/api/editoras
http://localhost:3000/api/editoras/3
http://localhost:3000/api/livros

### Para Executar a Aplicação

Para executar a aplicação, inicie o servidor com npm run dev e acesse a página inicial:

http://localhost:3000/Home

### Licença

Este projeto está licenciado sob a MIT License.

Clone ou acesse o repositório https://github.com/CarlosCatao/Mundo2_Nivel3-MissaoPratica/tree/main/livros-next ou e faça o download do código.

### Autor

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/69771619?v=4" width=115><br><sub>Carlos Automare Catão</sub>](https://github.com/CarlosCatao)]