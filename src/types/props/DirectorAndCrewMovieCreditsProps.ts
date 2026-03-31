import type {ActorMovie} from "@/types/ActorMovie.ts";
import type {LanguageResponse} from "@/types/LanguageResponse.ts";
import type {CrewMovie} from "@/types/CrewMovie.ts";

export type DirectorAndCrewMovieCreditsProps = {
    movieCredits: {
        cast: ActorMovie[]
        crew: CrewMovie[]
    }
    languageData: LanguageResponse
    gender: number
    profilePath: string
}