import type {AgeRating} from "@/types/AgeRating.ts";

export type AgeRatingResponse = {
    certifications: {
        US: AgeRating[]
    }
}