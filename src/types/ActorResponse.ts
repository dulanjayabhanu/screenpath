import type {Actor} from "@/types/Actor.ts";

export type ActorResponse = {
    page: number
    results: Actor[]
    total_pages: number
    total_results: number
}