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
    const { email } = req.body;

    if(!email){
        return res.status(400).json({ error: 'E-mail é obrigatório!'});
    }

    console.log('Novo lead Capturado:', email);
    res.status(201).json({ message: 'E-mail cadastrado na lista de espera!'});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
