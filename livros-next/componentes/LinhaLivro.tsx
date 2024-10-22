import React from 'react';
import { controleEditora } from '../classes/controle/ControleEditora'; // Importação nomeada

// b) Definição da interface LinhaLivroProps
interface LinhaLivroProps {
  livro:  any;
  excluir: (codigo: number) => void;
}

// c) Definição do componente exportável LinhaLivro
const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {

  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
            <tr>
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{nomeEditora}</td>
              <td>{livro.autores.join(', ')}</td>
              <td>
                <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
              </td>
            </tr>
          );
};

export default LinhaLivro;
