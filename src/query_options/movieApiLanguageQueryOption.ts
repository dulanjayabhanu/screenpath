import {queryOptions} from "@tanstack/react-query";
import getLanguageService from "@/services/getLanguageService.ts";

const movieApiLanguageQueryOption = () => {
    return queryOptions({
        queryKey: ["movie-api", "language"],
        queryFn: getLanguageService
    })
}

export default movieApiLanguageQueryOption