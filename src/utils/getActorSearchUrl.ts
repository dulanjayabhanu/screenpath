import {z} from "zod";
import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";

const searchTermSchema = z.string().min(1)

const getActorSearchUrl = (
    {
        searchTerm,
        page,
    }: ActorSearchProps ) => {
    const MOVIE_API_BASE_URL: string = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_PERSON_POPULAR_END_POINT: string = import.meta.env.VITE_MOVIE_API_PERSON_POPULAR_END_POINT
    const MOVIE_API_PERSON_SEARCH_END_POINT: string = import.meta.env.VITE_MOVIE_API_PERSON_SEARCH_END_POINT

    let url = new URL(MOVIE_API_PERSON_POPULAR_END_POINT, MOVIE_API_BASE_URL)

    const { success } = searchTermSchema.safeParse(searchTerm)

    if(success){
        url = new URL(MOVIE_API_PERSON_SEARCH_END_POINT, MOVIE_API_BASE_URL)
        url.searchParams.set("query", searchTerm)
    }
    url.searchParams.set("page", String(page))

    return url.toString()
}

export default getActorSearchUrl