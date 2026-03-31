import type {SingleActorResponse} from "@/types/SingleActorResponse.ts";

const getSingleActorService = async (actorId: string): Promise<SingleActorResponse> => {
    const MOVIE_API_BASE_URL: string = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_SINGLE_PERSON_END_POINT: string = import.meta.env.VITE_MOVIE_API_SINGLE_PERSON_END_POINT
    const MOVIE_API_SINGLE_MOVIE_CREDITS_END_POINT: string = import.meta.env.VITE_MOVIE_API_SINGLE_MOVIE_CREDITS_END_POINT
    const MOVIE_API_AUTHORIZATION_KEY: string = import.meta.env.VITE_MOVIE_API_AUTHORIZATION_KEY

    const finalUrl: string = `${MOVIE_API_BASE_URL}${MOVIE_API_SINGLE_PERSON_END_POINT}${actorId}?append_to_response=${MOVIE_API_SINGLE_MOVIE_CREDITS_END_POINT}`

    const response = await fetch(finalUrl, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${MOVIE_API_AUTHORIZATION_KEY}`
        }
    })

    return await response.json()
}

export default getSingleActorService