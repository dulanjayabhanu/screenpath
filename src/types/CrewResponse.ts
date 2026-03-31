import type {DirectorAndCrew} from "@/types/DirectorAndCrew.ts";

export type CrewResponse = {
    page: number
    results: DirectorAndCrew[]
    total_pages: number
    total_results: number
}