import {queryOptions} from "@tanstack/react-query";
import getActorSearchService from "@/services/getActorSearchService.ts";
import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";

const movieApiActorSearchQueryOption = (actorSearchProps: ActorSearchProps) => {
    return queryOptions({
        queryKey: ["movie-api", "actor-search", actorSearchProps],
        queryFn: () => getActorSearchService(actorSearchProps),
    })
}

export default movieApiActorSearchQueryOption