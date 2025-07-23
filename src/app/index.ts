// Global dependencies
import morgan from "morgan";
import express, { Application } from 'express';

// Project dependencies
import clubs from "./routes/clubs.routes";
import players from "./routes/players.routes";
import { errorHandler } from './middlewares/ErrorHandler';

export const createApp = () => {
    // Express initialization
    const api:Application = express();

    // Middlewares
    //api.use(morgan('dev'));
    api.use(express.json());

    // Routes
    api.use("/api", clubs);
    api.use("/api", players);

    // Error handling
    api.use(errorHandler);

    return api;
}