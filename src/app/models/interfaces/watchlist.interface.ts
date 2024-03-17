import { Movie } from "./movies.interface"

export interface UserData<T = any> {
    watchedMovies: Movie[]
    favoriteMovies: Movie[]
}