import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSelectedSortBy = () => {
    const { sortBy } = searchFilterDefaultValues()
    const [selectedSortBy, setSelectedSortBy] = useState<string>(sortBy)
    return (
        {
            selectedSortBy: selectedSortBy,
            setSelectedSortBy: setSelectedSortBy
        }
    )
}

export default useSelectedSortBy