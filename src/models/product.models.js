import { collection, getDocs, addDoc } from 'firebase/firestore';
import db from '../config/firebase.js' // Importamos la DB ya inicializada

const productsCollection = collection(db, 'items');

export const ProductModel = {
    create: async (data) => {
        try {
           
            const cleanData = JSON.parse(JSON.stringify(data));
            
            
            if (!cleanData.title || !cleanData.price) {
                throw new Error("Datos de producto incompletos");
            }

            const productsCollection = collection(db, 'products');
            const docRef = await addDoc(productsCollection, cleanData);
            
            return { id: docRef.id, ...cleanData };
        } catch (error) {
            console.error("ERROR DETALLADO:", error.message);
            throw error;
        }
    }
};