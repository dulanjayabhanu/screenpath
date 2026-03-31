import type {InternalActorDataSortProps} from "@/types/props/InternalActorDataSortProps.ts";
import type {Actor} from "@/types/Actor.ts";

const internalActorDataSort = (
    {
        actors,
        genderSort,
        sortBy,
    }: InternalActorDataSortProps): Actor[] => {

    let sortedActors: Actor[] = [...actors]

    if(genderSort){
        sortedActors = actors.filter((actor) =>
            String(actor.gender) === genderSort
        )
    }

    if(sortBy){
        if(sortBy === "popularity.desc"){
            sortedActors = sortedActors.sort((a, b) =>
                b.popularity - a.popularity
            )
        }else{
            sortedActors = sortedActors.sort((a, b) =>
                a.popularity - b.popularity
            )
        }
    }

    return sortedActors
}

export default internalActorDataSort