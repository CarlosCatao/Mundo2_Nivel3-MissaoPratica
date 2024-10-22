import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from './index';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
    
        if (req.method === 'GET') {
        const codEditora = parseInt(req.query.codEditora as string, 10);

            if (isNaN(codEditora)) {
                return res.status(400).json({ error: 'Código de editora inválido' });
            }

            const nomeEditora = controleEditora.getNomeEditora(codEditora);

            if (nomeEditora) {
                return res.status(200).json({ nome: nomeEditora });
            } else {
                return res.status(404).json({ error: 'Editora não encontrada' });
            }

        } else {
            res.setHeader('Allow', ['GET']);
            return res.status(405).json({ error: 'Método não permitido' });
        }

    } catch (error) {
            res.status(500).json({ error: 'Erro no servidor' });
        }
};
