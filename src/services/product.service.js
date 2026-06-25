import db from '../config/firebase.js'; 
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';

// 1. Obtener todos
export const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 2. Crear producto
export const createProduct = async (productData) => {
    if (!productData.title || !productData.price) {
        throw new Error("Datos incompletos");
    }
    const docRef = await addDoc(collection(db, "products"), productData);
    return { id: docRef.id, ...productData };
};

// 3. Eliminar producto
export const removeProduct = async (id) => {
    return await deleteDoc(doc(db, "products", id));
};