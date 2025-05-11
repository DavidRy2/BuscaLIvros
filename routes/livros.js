onst express = require('express');
const router = express.Router();

// Banco de dados em memória
let livros = [
  { id: 1, titulo: '1984', autor: 'George Orwell', ano: 1949 },
  { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 }
];

// [GET] Listar todos os livros
router.get('/', (req, res) => {
  res.json(livros);
});

// [GET] Obter livro por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(l => l.id === id);
  if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado' });
  res.json(livro);
});

// [POST] Criar novo livro
router.post('/', (req, res) => {
  const { titulo, autor, ano } = req.body;
  const novoLivro = {
    id: livros.length + 1,
    titulo,
    autor,
    ano
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// [PUT] Atualizar livro
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(l => l.id === id);
  if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado' });

  const { titulo, autor, ano } = req.body;
  livro.titulo = titulo;
  livro.autor = autor;
  livro.ano = ano;

  res.json(livro);
});

// [DELETE] Remover livro
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex(l => l.id === id);
  if (index === -1) return res.status(404).json({ mensagem: 'Livro não encontrado' });

  livros.splice(index, 1);
  res.status(204).send(); // No content
});

module.exports = router;
