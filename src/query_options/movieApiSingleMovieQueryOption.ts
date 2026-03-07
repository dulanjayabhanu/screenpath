import {queryOptions} from "@tanstack/react-query";
import getSingleMovieService from "@/services/getSingleMovieService.ts";

const movieApiSingleMovieQueryOption = (movieId: string) => {
    return queryOptions({
        queryKey: ["movie-api", "single-movie", movieId],
        queryFn: () => getSingleMovieService(movieId)
    })
}

export default movieApiSingleMovieQueryOption