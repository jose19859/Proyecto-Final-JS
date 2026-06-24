import { Router } from 'express';
import { getProducts, createProduct, deleteProduct } from '../controllers/product.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Rutas
router.get('/', getProducts);
router.post('/create', verifyToken, createProduct);
router.delete('/:id', verifyToken, deleteProduct);

export default router;