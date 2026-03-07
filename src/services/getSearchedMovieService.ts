import getSearchUrl from "@/utils/getSeachUrl.ts";
import type {MovieResponse} from "@/types/MovieResponse.ts";
import type {MovieSearchProp} from "@/types/props/MovieSearchProp.ts";

const getSearchedMovieService = async (movieSearchProp: MovieSearchProp): Promise<MovieResponse> => {
    const finalUrl: string = getSearchUrl(movieSearchProp)
    const MOVIE_API_AUTHORIZATION_KEY = import.meta.env.VITE_MOVIE_API_AUTHORIZATION_KEY
    const result = await fetch(finalUrl, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${MOVIE_API_AUTHORIZATION_KEY}`
        }
    })

    return await result.json()
}

export default getSearchedMovieService