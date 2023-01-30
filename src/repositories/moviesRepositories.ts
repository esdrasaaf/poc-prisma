import prisma from "../database/dt.js";
import { PostMovie, PutMovie } from "../protocols/movies.js";

export async function getAllQuery() {
    return prisma.movies.findMany({
        orderBy: {
            status: 'desc'
        }
    });
};

export async function getByGenreQuery(id: number) {
    return prisma.movies.findMany({
        where: {
            genreId: id
        },
        orderBy: {
            status: 'desc'
        }
    });
};

export async function getByPlatformQuery(id: number) {
    return prisma.movies.findMany({
        where: {
            platformId: id
        },
        orderBy: {
            status: 'desc'
        }
    });
};

export async function postQuery(movie: PostMovie) {
    return prisma.movies.create({
        data: movie
    });
};

export async function updateQuery(id: number, obj: PutMovie) {
    return prisma.movies.update({
        where: {
            id
        },
        data: obj
    })
};

export async function deleteQuery(id: number) {
    return prisma.movies.delete({
        where: {
            id
        }
    })
};