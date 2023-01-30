import prisma from "../database/dt.js";
import { getByGenreQuery, getByPlatformQuery } from "../repositories/moviesRepositories.js";

async function getGenreId(genre: string) {
    const genreDB = await prisma.genres.findFirst({
        where: { name: genre }
    })

    return getByGenreQuery(genreDB.id)
}

async function getPlatformId(platform: string) {
    const platformDB = await prisma.platforms.findFirst({
        where: { name: platform }
    })

    return getByPlatformQuery(platformDB.id)
}

export const movieService = {
    getGenreId,
    getPlatformId
}