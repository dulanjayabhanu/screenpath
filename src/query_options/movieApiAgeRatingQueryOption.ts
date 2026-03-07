import {queryOptions} from "@tanstack/react-query";
import getAgeRatingService from "@/services/getAgeRatingService.ts";

const movieApiAgeRatingQueryOption = () => {
    return queryOptions({
        queryKey: ["movie-api", "age-rating"],
        queryFn: getAgeRatingService
    })
}

export default movieApiAgeRatingQueryOption