const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Para entender JSON no corpo da requisição

// Rotas
app.use('/api', taskRoutes);

// Rota raiz para teste
app.get('/', (req, res) => {
    res.send({ message: 'API Funcionando!', doc: '/api/tasks' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});