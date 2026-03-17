import type {Crew} from "@/types/Crew.ts";
import type {ActorMovie} from "@/types/ActorMovie.ts";

export type SingleActorResponse = {
    adult: boolean
    also_known_as: string[]
    biography: string
    birthday: string
    deathday: string | null
    gender: number
    homepage: string | null
    id: number
    imdb_id: string
    known_for_department: string
    movie_credits: {
        cast: ActorMovie[]
        crew: Crew[]
    }
    name: string
    place_of_birth: string
    popularity: number
    profile_path: string
}