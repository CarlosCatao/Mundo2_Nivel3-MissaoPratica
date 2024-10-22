import { useState } from 'react';
import styles from '../styles/Livro.module.css'; // estilo para livros
import Head from 'next/head';
import Menu from '../componentes/Menu'; // Supondo que Menu esteja implementado
import ControleEditora from '../classes/controle/ControleEditora'; // Importar o controle de editoras
import { Livro } from '../classes/modelo/Livro';
import { useRouter } from 'next/router'; // Para navegação

// Definir o objeto controleEditora
const controleEditora = new ControleEditora();

// Definir a constante baseURL
const baseURL = "http://localhost:3000/api/livros";

// Função assíncrona para incluir o livro
const incluirLivro = async (livro: Livro) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(livro),
  });
  return response.ok;
};

const LivroDados = () => {
  // Definir vetor de opções com as editoras
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // Definir estados para título, resumo, autores e codEditora
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(opcoes.length > 0 ? opcoes[0].value : 0);

  //  Usar o hook de navegação
  const router = useRouter();

  // Método para tratar a seleção de editora
  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const [loading, setLoading] = useState(false);

  // Método para inclusão de livro
  const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault(); // Prevenir comportamento padrão do formulário
    setLoading(true);
    const novoLivro: Livro = {
      codigo: 0, // Código zero para novos livros
      titulo,
      resumo,
      autores: autores.split('\n'), // Separar os autores por linha
      codEditora,
    };

    const sucesso = await incluirLivro(novoLivro);
    setLoading(false);

    if (sucesso) {
      router.push('/LivroLista'); // Navegar para a lista de livros
    } else {
      alert("Erro ao incluir o livro.");
    }
  };

  // Retorno do componente (estrutura da página com o formulário)
  return (
    <div className={styles.container}>
      <Head>
        <title>Adicionar Livro</title>
        <meta name="description" content="Formulário para inclusão de novos livros" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1>Dados do Livro</h1>
        {/* k) Formulário com campos para os estados */}
        <form className={styles.formulario} onSubmit={incluir}>

          <div>
            <label htmlFor="titulo">Título:</label>
            <input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="resumo">Resumo:</label>
            <textarea
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              required
            />
          </div>

          {/* l) Lista de seleção (combo) para editoras */}
          <div>
            <label htmlFor="editora">Editora:</label>
            <select id="editora" value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="autores">Autores (separados por linha):</label>
            <textarea
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
              required
            />
          </div>
          
          {/* m) Botão de submissão */}
          <button type="submit">Salvar Dados</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
