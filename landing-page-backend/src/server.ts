import express from 'express';
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Backend da Landing Page rodando perfeitamente! 🚀')    
    });

app.post('/api/leads', (req, res) => {
    const { nome, tel, email, cargo } = req.body;

    if(!email || !nome || !cargo || !tel){
        return res.status(400).json({ error: 'E-mail, nome, cargo e telefone são obrigatórios!'});
    }

    console.log('Novo lead Capturado:', email, nome, cargo, tel);
    res.status(201).json({ message: 'Lead cadastrado na lista de espera!'});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
