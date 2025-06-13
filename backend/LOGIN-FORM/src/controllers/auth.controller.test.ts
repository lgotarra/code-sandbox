import { login } from './auth.controller';
import { Request, Response } from 'express';

describe('login controller', () => {
  it('should return 200 and a success message for valid credentials', () => {
    const req = {
      body: {
        username: 'admin',
        password: '1234',
      },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Login correcto' });
  });

  it('should return 401 and an error message for invalid credentials', () => {
    const req = {
      body: {
        username: 'user',
        password: 'wrongpassword',
      },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Credenciales inválidas' });
  });
});
