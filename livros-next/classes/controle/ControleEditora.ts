import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora A' },
  { codEditora: 2, nome: 'Editora B' },
  { codEditora: 3, nome: 'Editora C' },
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