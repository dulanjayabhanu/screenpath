import type {Movie} from "@/types/Movie.ts";

export type MovieResponse = {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}