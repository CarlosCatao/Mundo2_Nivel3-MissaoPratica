import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Alta Books' },
  { codEditora: 2, nome: 'Bookman' },
  { codEditora: 3, nome: 'Addison Wesley' },
  { codEditora: 4, nome: 'Pearson' }
];

export default class ControleEditora {
  getNomeEditora(codEditora: number) {
    const editora = this.getEditoras().find(e => e.codEditora === codEditora);
    return editora ? editora.nome : "Desconhecida";
  }

  getEditoras(): Array<Editora> {
    return editoras;
  }
}

export const controleEditora = new ControleEditora();