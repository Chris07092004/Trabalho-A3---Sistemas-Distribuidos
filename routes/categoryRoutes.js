import {create, list, update, remove} from '../controllers/categoryController.js';
import express from 'express';
const router =express.Router();

// router.use('/products', auth);
router.post('/categories', create);
router.get('/categories', list);
router.put('/categories/:id', update);
router.delete('/categories/:id', remove);

export default router;