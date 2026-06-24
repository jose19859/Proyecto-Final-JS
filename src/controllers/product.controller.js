import * as ProductService from '../services/product.service.js';

export const getProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

export const createProduct = async (req, res) => {
    try {
        const newProduct = await ProductService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductService.removeProduct(id);
        res.status(200).json({ message: `Producto ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar" });
    }
};