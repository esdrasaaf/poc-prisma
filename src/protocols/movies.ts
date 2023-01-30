export type MovieEntity = {
    id: number,
    name: string,
    platformId: number,
    genreId: number,
    status: boolean,
    rating: number,
    summary: string,
    created_at: string | Date
};

export type PostMovie = Omit<MovieEntity, 'id' | 'created_at' | 'status' | 'rating' | 'summary'>;
export type PutMovie = Omit<MovieEntity, 'id' | 'name' | 'platform' | 'genre' | 'created_at'>;
export type UpsertMovie = Partial<MovieEntity>;