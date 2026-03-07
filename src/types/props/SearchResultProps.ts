import * as React from "react";
import type {MovieResponse} from "@/types/MovieResponse.ts";

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
    movieResultRef: React.RefObject<HTMLDivElement | null>
}