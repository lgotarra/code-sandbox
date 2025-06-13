import request from "supertest";
import express from "express";
import authRoutes from "./auth.routes"; // Tu ruta real con validateData y login
import { StatusCodes } from "http-status-codes";

const app = express();
app.use(express.json());
app.use("/login", authRoutes);

describe("Auth Routes Integration", () => {
  describe("POST /login", () => {
    it("should return 200 and success message with valid credentials", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "admin", password: "1234" }); // credenciales válidas

      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body).toEqual({ message: "Login correcto" });
    });

    it("should return 401 with invalid credentials", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "foo", password: "bar" });

      expect(response.status).toBe(StatusCodes.UNAUTHORIZED);
      expect(response.body).toEqual({ error: "Credenciales inválidas" });
    });

    it("should return 400 with invalid data format", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: 1234, password: true }); // tipos incorrectos

      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
      expect(response.body).toHaveProperty("error", "Invalid data");
      expect(response.body).toHaveProperty("details");
      expect(Array.isArray(response.body.details)).toBe(true);
      expect(response.body.details.length).toEqual(2);
    });

    it("should return 400 if required fields are missing", async () => {
      const response = await request(app).post("/login").send({}); // faltan campos

      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
      expect(response.body).toHaveProperty("error", "Invalid data");
      expect(response.body.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ message: "username is Required" }),
          expect.objectContaining({ message: "password is Required" }),
        ])
      );
    });
  });
});
