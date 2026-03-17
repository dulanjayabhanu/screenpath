import type {Crew} from "@/types/Crew.ts";
import type {ActorMovie} from "@/types/ActorMovie.ts";
import type {LanguageResponse} from "@/types/LanguageResponse.ts";

export type ActorMovieCreditsProps = {
    movieCredits: {
        cast: ActorMovie[]
        crew: Crew[]
    }
    languageData: LanguageResponse
}