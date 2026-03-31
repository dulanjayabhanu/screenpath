import type {ActorMovie} from "@/types/ActorMovie.ts";
import type {LanguageResponse} from "@/types/LanguageResponse.ts";
import type {CrewMovie} from "@/types/CrewMovie.ts";

export type ActorMovieCreditsProps = {
    movieCredits: {
        cast: ActorMovie[]
        crew: CrewMovie[]
    }
    languageData: LanguageResponse
}