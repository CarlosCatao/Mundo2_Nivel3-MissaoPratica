import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Livro.module.css';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';
import ControleEditora from '../classes/controle/ControleEditora';
import ControleLivro from '../classes/controle/ControleLivro';

const LivroLista: React.FC = () => {

  // Armazena a lista de livros e o status do carregamento
  const [livros, setLivros] = useState<Array<any>>([]);

  const [carregado, setCarregado] = useState<boolean>(false);

// Definição do baseURL
const baseURL = "http://localhost:3000/api/livros";

// Instancia o controle de editoras
const controleEditora = new ControleEditora();

// Instancia o controle de livros
const controleLivro = new ControleLivro();

// Função assíncrona para obter os livros
const obterLivros = async () => {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    setLivros(data);
    setCarregado(true);
  } catch (error) {
    console.error('Erro ao obter livros:', error);
  }
};

useEffect(() => {
  obterLivros();
}, []);

// Função assíncrona para excluir um livro
const excluirLivro = async (codigo: number) => {
  try {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setLivros(livros.filter((livro) => livro.codigo !== codigo));
    } else {
      console.error('Erro ao excluir livro:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
  }
  };
  
  return (
    <div  className={styles.container}>
      <Head>
        <title>Catálogo de Livros</title>
        <meta name="description" content="Exibição da lista de livros disponíveis" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1>Catálogo de Livros</h1>
          <table className={styles.table}>
            <thead className="table-head-bg-black">
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody className={styles['zebra-striped']}>
            {carregado && livros.map((livro) => (
              <tr key={livro.codigo}>
                <td>
                  <div>
                    {livro.titulo}
                  </div>
                  <div>
                    <button onClick={() => excluirLivro(livro.codigo)}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
                <td>{livro.resumo}</td>
                <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
                <td>
                  <ul>
                    {livro.autores.map((autor, index) => (
                      <li key={index}>{autor}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
