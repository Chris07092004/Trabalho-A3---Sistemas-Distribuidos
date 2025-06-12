// src/controllers/categoryController.js
import firestoreServices  from "../services/firestore.js";
const COL = 'categories';

export const create = async (req, res) => {
  const { nome, descricao } = req.body;
  if (!nome || descricao == null) return res.status(400).json({ error: 'nome e descrição obrigatórios' });
  try {
    const ref = await db.collection(COL).add({ nome, descricao });
    res.status(201).json({ id: ref.id, nome, descricao });
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
    const ref = db.collection(COL).doc(id);
    await ref.update({ ...(nome && { nome }), ...(descricao != null && { descrição }) });
    const updated = await ref.get();
    res.json({ id: updated.id, ...updated.data() });
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao atualizar categoria.', details: erro.message });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection(COL).doc(id).delete();
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao deletar categoria.', details: erro.message });
  }
};


