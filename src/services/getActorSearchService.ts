import getActorSearchUrl from "@/utils/getActorSearchUrl.ts";
import type {ActorResponse} from "@/types/ActorResponse.ts";
import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";

const getActorSearchService = async(actorSearchProps: ActorSearchProps): Promise<ActorResponse> => {
    const MOVIE_API_AUTHORIZATION_KEY: string = import.meta.env.VITE_MOVIE_API_AUTHORIZATION_KEY
    const finalUrl:string = getActorSearchUrl(actorSearchProps)

    const response = await fetch(finalUrl, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${MOVIE_API_AUTHORIZATION_KEY}`
        }
    })

    return await response.json()
}

export default getActorSearchService