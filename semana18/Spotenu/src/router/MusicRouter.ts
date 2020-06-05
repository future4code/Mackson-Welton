import express from "express";
import { MusicController } from "../controller/MusicController";
//linha responsável por criar um módulo de rotas no express
export const musicRouter = express.Router();

musicRouter.post("/addgenre", new MusicController().addGenre);
musicRouter.get("/genre", new MusicController().getGenreByName);