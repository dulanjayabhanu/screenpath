import {queryOptions} from "@tanstack/react-query";
import getSearchedMovieService from "@/services/getSearchedMovieService.ts";
import type {MovieSearchProp} from "@/types/props/MovieSearchProp.ts";

const movieApiSearchQueryOption = (movieSearchTermProp: MovieSearchProp) => {
    return queryOptions({
        queryKey: ["movie-api", "search", movieSearchTermProp],
        queryFn: () => getSearchedMovieService(movieSearchTermProp),
        enabled: true
    })
}

export default movieApiSearchQueryOption