import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora A' },
  { codEditora: 2, nome: 'Editora B' },
  { codEditora: 3, nome: 'Editora C' },
];

export class ControleEditora {
  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora?.nome;
  }

  getEditoras(): Array<Editora> {
    return editoras;
  }
}

export const controleEditora = new ControleEditora();