import { Router } from 'express';
const router = Router();
import { getDashboard, createProduct, updateProduct, deleteProduct } from '../controllers/adminController';
import authenticate from '../middlewares/authenticate';
import authorizeAdmin from '../middlewares/authorizeAdmin';

// Proteger todas las rutas de administración
router.use(authenticate);
router.use(authorizeAdmin);

// Define rutas de administración
router.get('/dashboard', getDashboard);
router.post('/create-product', createProduct);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);

export default router;
