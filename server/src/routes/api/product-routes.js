import express from 'express';
import {
    getAllProducts,
    getProductById,
} from '../../controllers/product-controller.js';
const router = express.Router();

//Get all products
router.get('/', getAllProducts);

//Get product by ID
router.get('/:id', getProductById);

export default router;