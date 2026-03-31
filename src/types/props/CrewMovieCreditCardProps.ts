import type {Language} from "@/types/Language.ts";
import type {CrewMovie} from "@/types/CrewMovie.ts";

export type CrewMovieCreditCardProps = {
    crewMovie: CrewMovie
    language: Language
    gender: number
    profilePath: string
}