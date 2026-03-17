import {queryOptions} from "@tanstack/react-query";
import getSingleActorService from "@/services/getSingleActorService.ts";

const movieApiSingleActorQueryOption = (actorId: string) => {
    return queryOptions({
        queryKey: ["movie-api", "single-actor", actorId],
        queryFn: () => getSingleActorService(actorId),
    })
}

export default movieApiSingleActorQueryOption