import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: 'Livro 1',
    resumo: 'Resumo do Livro 1',
    autores: ['Autor 1'],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: 'Livro 2',
    resumo: 'Resumo do Livro 2',
    autores: ['Autor 2', 'Autor 3'],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: 'Livro 3',
    resumo: 'Resumo do Livro 3',
    autores: ['Autor 4'],
  },
];

export default class ControleLivro {

  private livros: any[];

  constructor() {
    this.livros = livros;
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      livros.splice(index, 1);
    }
  }
}

export const controleLivro = new ControleLivro();