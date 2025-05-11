const express = require('express');
const app = express();
const livrosRouter = require('./routes/livros');

app.use(express.json()); // Habilita JSON no body
app.use('/api/livros', livrosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
