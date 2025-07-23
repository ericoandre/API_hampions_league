import { ClubModel } from "../models/clubs.model";

const database = [
    {
        id: 1,
        name: "Real Madrid",
    }
];

export const findAll = async ():Promise<ClubModel[]> => {
    return database;
};