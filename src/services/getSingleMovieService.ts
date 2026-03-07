import type {SingleMovieResponse} from "@/types/SingleMovieResponse.ts";

const getSingleMovieService = async (movieId: string): Promise<SingleMovieResponse> => {
    const MOVIE_API_BASE_URL: string = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_AUTHORIZATION_KEY: string = import.meta.env.VITE_MOVIE_API_AUTHORIZATION_KEY
    const MOVIE_API_SINGLE_MOVIE_API_URL: string = import.meta.env.VITE_MOVIE_API_SINGLE_MOVIE_END_POINT

    const finalUrl: string = `${MOVIE_API_BASE_URL}${MOVIE_API_SINGLE_MOVIE_API_URL}/${movieId}?append_to_response=keywords,credits,videos,recommendations`

    const result = await fetch(finalUrl, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${MOVIE_API_AUTHORIZATION_KEY}`
        }
    })

    return await result.json()
}

export default getSingleMovieService