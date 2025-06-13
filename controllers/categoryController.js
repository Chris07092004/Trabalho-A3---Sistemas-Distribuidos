// src/controllers/categoryController.js
import firestoreServices  from "../services/firestore.js";
const COL = 'categories';

export const create = async (req, res) => {
  const { nome, descricao } = req.body;
  if (!nome || descricao == null) return res.status(400).json({ error: 'nome e descrição obrigatórios' });
  try {
    await firestoreServices.saveCategoria({nome: nome, descricao: descricao });

    res.status(201).json({nome: nome, descrição: descricao });
    } catch (erro) {
    res.status(500).json({ error: 'Erro ao criar categoria.', details: erro.message });
  }
};

export const list = async (_req, res) => {
  try {
     const list = await firestoreServices.getAllCategories();
    res.json(list);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao listar categorias.', details: erro.message });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao } = req.body;

  try {
    const dadosAtualizados = {};
    if (nome) dadosAtualizados.nome = nome;
    if (descricao != null) dadosAtualizados.descricao = descricao;

    const updated = await firestoreServices.updateCategory(id, dadosAtualizados);
    res.json(updated);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao atualizar categoria.', details: erro.message });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await firestoreServices.deleteCategory(id);
    res.status(204).send(); // 204 = No Content
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao deletar categoria.', details: erro.message });
  }
};


