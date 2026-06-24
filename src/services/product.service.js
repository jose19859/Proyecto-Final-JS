import { ProductModel } from '../models/product.models.js';

export const getAllProducts = async () => {
    return await ProductModel.findAll();
};
export const removeProduct = async (id) => {
    return await ProductModel.delete(id);
};

export const createProduct = async (productData) => {
    if (!productData.title || !productData.price) {
        throw new Error("Datos incompletos");
    }
    return await ProductModel.create(productData);
};