import Product from "../models/products";

const productData = [
    { name: 'Hat', price: 12.99, stock: 15 },
    { name: 'Shirt', price: 20.99, stock: 10 },
    { name: 'Shoes', price: 50.99, stock: 5 },
    { name: 'Shirt', price: 18.99, stock: 10 },
    { name: 'Watch', price: 35.99, stock: 10 },
    { name: 'Hat', price: 12.99, stock: 10 },
];

const seedProducts = async () => {
    await Product.bulkCreate(productData);
};

export default seedProducts;