import express, { type Request, type Response } from 'express';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}));

app.use(express.json());

interface Lead{
    nome: string;
    email: string;
    tel: string;
    cargo: string;
}

app.get('/', (req: Request, res: Response)=> {
    res.send('Backend da Landing Page rodando perfeitamente! 🚀')    
    });

app.post('/api/leads', (req: Request<{}, {}, Lead>, res: Response)=> {

    try {
        const { nome, tel, email, cargo } = req.body;

    if(!email || !nome || !cargo || !tel){
        return res.status(400).json({ error: 'Dados inválidos ou Faltando dados!'});
    }

    res.status(201).json({ message: 'Lead cadastrado na lista de espera!'});

} catch (error) {
    console.error('Erro ao cadastrar lead:', error);
    res.status(500).json({ error: 'Erro interno no servidor!'});
}

});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
