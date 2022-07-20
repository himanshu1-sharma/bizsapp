import express from "express";
import {getInput} from "../controllers/routeHandler.js";

const router = express.Router();

router.post("/getinput", getInput);

export default router;
