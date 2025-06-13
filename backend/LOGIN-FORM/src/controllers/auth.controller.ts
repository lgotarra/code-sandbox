import { Request, Response } from "express";
import { LoginDTO } from "../schemas/login.schema";

export const login = (req: Request<{}, {}, LoginDTO>, res: Response) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.status(200).json({ message: "Login correcto" });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
};
