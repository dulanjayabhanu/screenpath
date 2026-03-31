import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";
import {z} from "zod";
import getActorSearchUrl from "@/utils/getActorSearchUrl.ts";

const searchTermSchema = z.string().min(1)

const getDirectorAndCrewSearchUrl = (
    {
        searchTerm,
        page,
    }: ActorSearchProps): string => {
    const MOVIE_API_BASE_URL: string = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_DISCOVER_END_POINT: string = import.meta.env.VITE_MOVIE_API_DISCOVER_END_POINT
    const MOVIE_API_DEFAULT_REGION: string = import.meta.env.VITE_MOVIE_API_DEFAULT_REGION

    const { success } = searchTermSchema.safeParse(searchTerm)
    if(success){
        return getActorSearchUrl({
            searchTerm,
            page,
        })
    }

    const url = new URL(MOVIE_API_DISCOVER_END_POINT, MOVIE_API_BASE_URL)
    if(page){
        url.searchParams.set("page", String(page))
    }
    url.searchParams.set("region", MOVIE_API_DEFAULT_REGION.toUpperCase())
    url.searchParams.set("certification_country", MOVIE_API_DEFAULT_REGION.toUpperCase())

    return url.toString()
}

export default getDirectorAndCrewSearchUrl