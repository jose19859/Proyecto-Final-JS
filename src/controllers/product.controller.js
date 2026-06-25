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
        console.log("Controlador: Guardando producto real en Firebase...");
        
        // Esta es la línea que hace el trabajo real:
        const newProduct = await ProductService.createProduct(req.body);
        
        console.log("Controlador: Guardado exitoso:", newProduct.id);
        
        // Devolvemos el producto real que vino de la base de datos
        return res.status(201).json(newProduct);

    } catch (error) {
        console.error("ERROR AL GUARDAR:", error);
        return res.status(500).json({ message: "Error al guardar en Firebase", error: error.message });
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