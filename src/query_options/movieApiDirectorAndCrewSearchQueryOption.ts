import {queryOptions} from "@tanstack/react-query";
import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";
import getDirectorAndCrewSearchService from "@/services/getDirectorAndCrewSearchService.ts";

const movieApiDirectorAndCrewSearchQueryOption = (actorSearchProps: ActorSearchProps) => {
    return queryOptions({
        queryKey: ["movie-api", "actor-search", actorSearchProps],
        queryFn: () => getDirectorAndCrewSearchService(actorSearchProps),
        enabled: Boolean(actorSearchProps.searchTerm),
    })
}

export default movieApiDirectorAndCrewSearchQueryOption