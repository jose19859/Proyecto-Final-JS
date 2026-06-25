import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import authRoutes from './src/routes/auth.routes.js';
import productRoutes from './src/routes/products.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Aquí conectas las rutas que ya creamos
app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});