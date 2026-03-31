import { NextFunction, Request, Response } from "express";
import { auth } from "../lib/auth.js";
import { signInEmail } from "better-auth/api";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;

    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    const data = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const signOut = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await auth.api.signOut();
  } catch (error) {
    next(error);
  }
};
