import { Request, Response } from "express";
import { LoginDTO } from "../schemas/login.schema";
import { StatusCodes } from "http-status-codes";

export const login = (req: Request<{}, {}, LoginDTO>, res: Response) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.status(StatusCodes.OK).json({ message: "Login correcto" });
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Credenciales inválidas" });
  }
};
