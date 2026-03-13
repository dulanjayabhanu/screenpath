import {useState} from "react";
import actorSearchFilterDefaultValues from "@/constants/actorSearchFilterDefaultValues.ts";

const useSelectedActorSortBy = () => {
    const { sortBy } = actorSearchFilterDefaultValues()
    const [ selectedSortBy, setSelectedSortBy ] = useState<string>(sortBy)
    return {
        selectedSortBy: selectedSortBy,
        setSelectedSortBy: setSelectedSortBy,
    }
}

export default useSelectedActorSortBy