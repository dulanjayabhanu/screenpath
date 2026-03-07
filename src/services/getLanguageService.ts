import type {LanguageResponse} from "@/types/LanguageResponse.ts";

const getLanguageService = async (): Promise<LanguageResponse> => {
    const MOVIE_API_BASE_URL = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_LANGUAGE_END_POINT = import.meta.env.VITE_MOVIE_API_LANGUAGE_END_POINT
    const MOVIE_API_AUTHORIZATION_KEY = import.meta.env.VITE_MOVIE_API_AUTHORIZATION_KEY

    const response = await fetch(`${MOVIE_API_BASE_URL}${MOVIE_API_LANGUAGE_END_POINT}`, {
        method: "GET",
        headers: {
            accept: "application.json",
            Authorization: `Bearer ${MOVIE_API_AUTHORIZATION_KEY}`
        }
    })

    return await response.json()
}

export default getLanguageService