import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '../../../classes/controle/ControleLivro';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { codigo } = req.query;

    if (req.method === 'DELETE') {
        try {
            controleLivro.excluir(Number(codigo));
            res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir o livro' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};
