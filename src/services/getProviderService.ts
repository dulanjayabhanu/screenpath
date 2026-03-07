import type {ProviderResponse} from "@/types/ProviderResponse.ts";

const getProviderService = async (): Promise<ProviderResponse> => {
    const MOVIE_API_BASE_URL = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_PROVIDERS_END_POINT = import.meta.env.VITE_MOVIE_API_PROVIDERS_END_POINT
    const MOVIE_API_AUTHORIZATION_KEY = import.meta.env.VITE_MOVIE_API_AUTHORIZATION_KEY
    const MOVIE_API_DEFAULT_REGION = import.meta.env.VITE_MOVIE_API_DEFAULT_REGION

    const response = await fetch(`${MOVIE_API_BASE_URL}${MOVIE_API_PROVIDERS_END_POINT}?watch_region=${MOVIE_API_DEFAULT_REGION}`, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${MOVIE_API_AUTHORIZATION_KEY}`
        }
    })

    return await response.json()
}

export default getProviderService