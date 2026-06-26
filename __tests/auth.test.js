import request from "supertest";
import app from "../app.js";

describe("POST /auth/login", () => {
    
    test("Debería retornar 200 y un token con credenciales válidas", async () => {
        const credenciales = {
            username: "admin", // O el email que tengas en tu default_user
            password: "123456"      // La contraseña que corresponda
        };

        const response = await request(app)
            .post("/auth/login")
            .send(credenciales);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
    });

  test("Debería retornar 401 con credenciales inválidas", async () => {
        const credencialesIncorrectas = {
            username: "admin", 
            password: "CONTRASEÑA_EQUIVOCADA_123" // <-- CAMBIA ESTO
        };

        const response = await request(app)
            .post("/auth/login")
            .send(credencialesIncorrectas);

        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Credenciales incorrectas");
    });
});