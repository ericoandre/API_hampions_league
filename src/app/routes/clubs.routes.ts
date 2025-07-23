import { Router } from "express";
import * as ClubsController from "../controllers/clubs.controllers";

const router = Router();

router.get("/clubs", ClubsController.getClubs);

export default router;