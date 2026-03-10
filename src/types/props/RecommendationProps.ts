import type {Movie} from "@/types/Movie.ts";
import type {LanguageResponse} from "@/types/LanguageResponse.ts";

export type RecommendationProps = {
    recommendations: {
        page: number
        results: Movie[]
        total_pages: number
        total_results: number
    }
    languageData: LanguageResponse
}