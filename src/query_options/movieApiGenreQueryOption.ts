import {queryOptions} from "@tanstack/react-query";
import getGenreService from "@/services/getGenreService.ts";

const movieApiGenreQueryOption = () => {
    return queryOptions({
        queryKey: ["movie-api", "genre"],
        queryFn: getGenreService
    })
}

export default movieApiGenreQueryOption