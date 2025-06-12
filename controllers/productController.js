// src/controllers/productController.js
import firestoreServices  from "../services/firestore.js";
const COL = 'products';

export const create = async (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || preco == null) return res.status(400).json({ error: 'nome e preco obrigatórios' });
  try {
    const ref = await db.collection(COL).add({ nome, preco });
    res.status(201).json({ id: ref.id, nome, preco });
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
    const ref = db.collection(COL).doc(id);
    await ref.update({ ...(nome && { nome }), ...(preco != null && { preco }) });
    const updated = await ref.get();
    res.json({ id: updated.id, ...updated.data() });
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao atualizar produto.', details: erro.message });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection(COL).doc(id).delete();
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao deletar produto.', details: erro.message });
  }
};

