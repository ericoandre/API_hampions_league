import { NextFunction, Request, Response } from "express";
import { notFound } from "../utils/http.helper";

export const errorHandler = async (req: Request, res: Response, next: NextFunction) => {
    const response = await notFound(new Error('not found').message);
    return res.status(response.statusCode).json({ message: response.body});
}