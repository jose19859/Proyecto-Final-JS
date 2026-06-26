import request from "supertest";
import app from "../app.js";

describe("Pruebas de la API de Productos", () => {
    
    test("GET /api/products debería retornar status 200", async () => {
        const response = await request(app).get("/api/products");
        
        expect(response.status).toBe(200);
        // Validamos que la respuesta sea un array, tal como espera tu frontend
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    test("POST /api/products/create debería crear un producto exitosamente", async () => {
        const nuevoProducto = {
            title: "Producto de Prueba",
            price: 1500,
            category: "Prueba"
        };

        const response = await request(app)
            .post("/api/products/create")
            .send(nuevoProducto);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.title).toBe("Producto de Prueba");
    });
});