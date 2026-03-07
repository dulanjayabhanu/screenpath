import type {GenreResponse} from "@/types/GenreResponse.ts";

const getGenreService = async (): Promise<GenreResponse> => {

    const MOVIE_API_BASE_URL: string = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_GENRE_END_POINT: string = import.meta.env.VITE_MOVIE_API_GENRE_END_POINT
    const MOVIE_API_AUTHORIZATION_KEY: string = import.meta.env.VITE_MOVIE_API_AUTHORIZATION_KEY

    const response = await fetch(`${MOVIE_API_BASE_URL}${MOVIE_API_GENRE_END_POINT}`, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${MOVIE_API_AUTHORIZATION_KEY}`
        }
    })

    return await response.json()
}

export default getGenreService