import { Request, Response } from "express";
import * as service from "../services/clubs.services";

export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await service.getClubsService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};