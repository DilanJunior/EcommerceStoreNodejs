// routes/products.js
import express from 'express';
import { getProducts, getProductById, createProduct} from '../controllers/ProductController.js'
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configuración de Multer para manejar la carga de archivos
 const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorio donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Renombrar archivo para evitar colisiones
  },
});

const upload = multer({ storage: storage }); 


router.get('/', getProducts)

router.post('/', upload.single('image'), createProduct) 

router.get('/:name', getProductById)


export default router;
