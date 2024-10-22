import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  
  const controleLivros = new ControleLivro();    // Instanciando o controlador de livros
  const controleEditora = new ControleEditora(); // Instanciando o controlador de editoras

  useEffect(() => {
    if (!carregado) {
      const livrosObtidos = controleLivros.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    }

  }, [carregado, controleLivros]);

  const excluir = (codigo) => {
    controleLivros.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>

      <h1 style={{ paddingLeft: '10%', textAlign: 'left' }}>Catálogo de Livros</h1>

      <div className="d-flex justify-content-center mt-4">
        <table style={{ width: '80%' }}>
          
            <thead  className="table-head-bg-black">
              <tr>
                <th>Título</th>
                <th>Resumo</th>
                <th>Editora</th>
                <th>Autores</th>
              </tr>
            </thead>
          
          <tbody  className="zebra-striped">
            {livros.map((livro) => {
              const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
              return (
               <tr key={livro.codigo}>
                  <td>
                    <div>
                      <strong>{livro.titulo}</strong>
                    </div>
                    <div>
                      <button 
                        onClick={() => excluir(livro.codigo)} 
                        className="btn btn-danger btn-sm mt-2"
                      >
                      Excluir
                      </button>
                    </div>
                  </td>
                  <td>{livro.resumo}</td>
                  <td>{nomeEditora}</td>
                  <td>
                    <ul>
                      {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LivroLista;
