import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    // Obtenemos el token del header Authorization (formato: "Bearer <token>")
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: "Acceso denegado, token requerido" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); // Si el token es válido, pasamos al controlador
    } catch (error) {
        res.status(403).json({ message: "Token inválido o expirado" });
    }
};