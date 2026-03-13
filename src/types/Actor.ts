import type {ActorMovie} from "@/types/ActorMovie.ts";

export type Actor = {
    adult: boolean
    gender: number
    id: number
    known_for: ActorMovie[]
    known_for_department: string
    name: string
    popularity: number
    profile_path: string
}