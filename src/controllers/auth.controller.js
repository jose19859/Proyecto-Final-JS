import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { username, password } = req.body;

  
    if (username === "admin" && password === "123456") {
        const token = jwt.sign(
            { username }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );
        return res.json({ token });
    }

    res.status(401).json({ message: "Credenciales incorrectas" });
    
};