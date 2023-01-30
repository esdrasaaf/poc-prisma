import { Router } from "express";

//Controllers
import { getAllMovies, getMoviesByGenre, postMovies, getMoviesByPlatform, updateMovies, deleteMovies } from "../controllers/moviesControllers.js";

//Middlewares
import { postValidation, putValidation } from "../middlewares/moviesMiddlewares.js";

const router = Router();

router.get("/movies", getAllMovies);
router.get("/movies/genre/:genre", getMoviesByGenre);
router.get("/movies/platform/:platform", getMoviesByPlatform);
router.post("/movies", postValidation, postMovies);
router.put("/movies/:id", putValidation, updateMovies);
router.delete("/movies/:id", deleteMovies);

export default router;