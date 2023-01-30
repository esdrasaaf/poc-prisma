import prisma from "../src/database/dt.js";

async function seedingPlatforms() {
    await prisma.platforms.createMany({
        data: [
            { name : "Netflix"},
            { name : "Disney +"},
            { name : "HBO Max"},
            { name : "Star +"},
            { name : "Prime Video"}
        ]
    })
}

async function seedingGenres() {
    await prisma.genres.createMany({
        data: [
            { name : "Ação"},
            { name : "Aventura"},
            { name : "Terror"},
            { name : "Suspense"},
            { name : "Comédia"}
        ]
    })
}

async function seedingMovies() {
    await prisma.movies.createMany({
        data: [
            { 
                name : "Os Incríveis",
                platformId : 1,
                genreId : 1,
            },
            { 
                name : "Os Incríveis 2",
                platformId : 2,
                genreId : 2,
            },
            { 
                name : "Os Incríveis 3",
                platformId : 3,
                genreId : 3,
            },
            { 
                name : "Os Incríveis 4",
                platformId : 4,
                genreId : 4,
            },
            { 
                name : "Os Incríveis 5",
                platformId : 5,
                genreId : 5,
            },
        ]
    })
}


seedingGenres()
    .then(() => {
        console.log("Registro feito com sucesso");
    })
    .catch((e) => {
        console.error((e));
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })

seedingPlatforms()
    .then(() => {
        console.log("Registro feito com sucesso");
    })
    .catch((e) => {
        console.error((e));
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })

seedingMovies()
    .then(() => {
        console.log("Registro feito com sucesso");
    })
    .catch((e) => {
        console.error((e));
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })