import * as React from "react";
import type {MovieResponse} from "@/types/MovieResponse.ts";
import type {LanguageResponse} from "@/types/LanguageResponse.ts";

export type SearchResultsProps = {
    searchedMovieProps: {
        movieResponse: MovieResponse
        isPending: boolean
        isError: boolean
    }
    paginationHookProps: {
        pagination: number
        setPagination:  React.Dispatch<React.SetStateAction<number>>
    }
    languageData: LanguageResponse
    movieResultRef: React.RefObject<HTMLDivElement | null>
}