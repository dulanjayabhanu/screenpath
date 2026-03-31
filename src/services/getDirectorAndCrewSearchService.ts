import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";
import getActorSearchUrl from "@/utils/getActorSearchUrl.ts";
import type {CrewResponse} from "@/types/CrewResponse.ts";

const getDirectorAndCrewSearchService = async(actorSearchProps: ActorSearchProps): Promise<CrewResponse> => {
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

export default getDirectorAndCrewSearchService