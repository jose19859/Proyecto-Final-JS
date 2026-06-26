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
app.get("/", (req, res) => {
    res.status(200).json({ message: "bienvenidos a la API REST" });
});
export default app;