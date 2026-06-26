import  request from "supertest";
import app from "../app.js";

describe("GET /", () => {
    test("espero responda un estatus 200 y un mensaje", async() => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    // Corregimos la ortografía aquí también:
    expect(response.body.message).toBe("bienvenidos a la API REST");

    });
});