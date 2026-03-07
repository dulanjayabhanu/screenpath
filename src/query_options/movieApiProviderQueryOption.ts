import {queryOptions} from "@tanstack/react-query";
import getProviderService from "@/services/getProviderService.ts";

const movieApiProviderQueryOption = () => {
    return queryOptions({
        queryKey: ["movie-api", "provider"],
        queryFn: getProviderService
    })
}

export default movieApiProviderQueryOption