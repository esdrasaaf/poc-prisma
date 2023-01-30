import { Request, Response } from "express";

//Protocols
import { PostMovie, PutMovie } from "../protocols/movies.js";

//Repositories
import { getAllQuery, getByGenreQuery, getByPlatformQuery, postQuery, updateQuery, deleteQuery } from "../repositories/moviesRepositories.js";

//Services
import { movieService } from "../services/moviesService.js";

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await getAllQuery()

        if (movies.length > 0) {
            return res.status(200).send(movies)
        } else {
            return res.status(404).send("We don't have movies registered yet")
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function getMoviesByGenre(req: Request, res: Response) {
    const { genre } = req.params

    try {
        const movies = await movieService.getGenreId(genre);

        if (movies.length > 0) {
            return res.status(200).send(movies)
        } else {
            return res.status(404).send("We don't have movies registered with this genre yet")
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function getMoviesByPlatform(req: Request, res: Response) {
    const { platform } = req.params

    try {
        const movies = await movieService.getPlatformId(platform)

        if (movies.length > 0) {
            return res.status(200).send(movies)
        } else {
            return res.status(404).send("We don't have movies registered on this platform yet")
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function postMovies(req: Request, res: Response) {
    try {
        const movie = req.body as PostMovie

        const result = await postQuery(movie)
        return res.status(201).send(`Inserted one movie`)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function updateMovies(req: Request, res: Response) {
    const { id } = req.params;
    const obj = req.body as PutMovie;
    
    try {
        await updateQuery(Number(id), obj)
        return res.status(201).send(`Updated one movie`);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export async function deleteMovies(req: Request, res: Response) {
    const { id } = req.params
    
    try {
        const result = await deleteQuery(Number(id))
        return res.status(200).send(`Deleted one movie`);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};