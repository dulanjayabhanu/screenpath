import type {SortBy} from "@/types/SortBy.ts";

const getActorSortByOptions = (): SortBy[] => {
    return [
        { name: "Popularity ↓", value: "popularity.desc" },
        { name: "Popularity ↑", value: "popularity.asc" },
    ]
}

export default getActorSortByOptions