// src/routes/productRoutes.js

import {create, list, update, remove} from '../controllers/productController.js';
import express from 'express';
const router =express.Router();

// router.use('/products', auth);
router.post('/products', create);
router.get('/products', list);
router.put('/products/:id', update);
router.delete('/products/:id', remove);

export default router;

