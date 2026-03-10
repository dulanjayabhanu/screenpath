import type {Movie} from "@/types/Movie.ts";
import type {Language} from "@/types/Language.ts";

export type RecommendationCardProps = {
    movie: Movie
    language: Language
}