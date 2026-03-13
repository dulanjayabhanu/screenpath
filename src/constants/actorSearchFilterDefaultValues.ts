import type {ActorSearchFilterDefaultValues} from "@/types/ActorSearchFilterDefaultValues.ts";

const actorSearchFilterDefaultValues = (): ActorSearchFilterDefaultValues => {
    return {
        searchTerm: "",
        gender: "",
        sortBy: "",
    }
}

export default actorSearchFilterDefaultValues