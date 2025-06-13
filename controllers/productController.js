// src/controllers/productController.js
import firestoreServices  from "../services/firestore.js";
const COL = 'products';

export const create = async (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || preco == null) return res.status(400).json({ error: 'nome e preço obrigatórios' });
  try {
    await firestoreServices.saveProduto({nome: nome, preco: preco });

    res.status(201).json({ nome, preco });
    } catch (erro) {
    res.status(500).json({ error: 'Erro ao criar produto.', details: erro.message });
  }
};

export const list = async (_req, res) => {
  try {
     const list = await firestoreServices.getAllProducts();
    res.json(list);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao listar produtos.', details: erro.message });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;

  try {
    const dadosAtualizados = {};
    if (nome) dadosAtualizados.nome = nome;
    if (preco != null) dadosAtualizados.preco = preco;

    const updated = await firestoreServices.updateProduct(id, dadosAtualizados);
    res.json(updated);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao atualizar produto.', details: erro.message });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await firestoreServices.deleteProduct(id);
    res.status(204).send(); // 204 = No Content
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao deletar produto.', details: erro.message });
  }
};

