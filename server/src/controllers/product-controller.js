import { Product } from "../models/index.js";

// Handles product-related logic.
//Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error finding all products.' });
    }
};

//Get product by ID
const getProductById = async (req, res) => {
    try {
        const products = await Product.findByPk(req.params.id);
        if (!products) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error message' });
    }
};

export { getAllProducts, getProductById };