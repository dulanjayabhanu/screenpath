import type {Genre} from "@/types/Genre.ts";
import type {Keyword} from "@/types/Keyword.ts";

export type MovieShowcaseProps = {
    backdrop_path: string | null
    title: string
    release_date: string
    tagline: string
    overview: string
    vote_average: number
    origin_country: string[]
    origin_language: string
    runtime: number
    genres: Genre[]
    keywords: {
        keywords: Keyword[]
    }
}