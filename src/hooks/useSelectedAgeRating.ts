import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSelectedAgeRating = () => {
    const { ageRating } = searchFilterDefaultValues()
    const [selectedAgeRating, setSelectedAgeRating] = useState<string>(ageRating)
    return (
        {
            selectedAgeRating: selectedAgeRating,
            setSelectedAgeRating: setSelectedAgeRating
        }
    )
}

export default useSelectedAgeRating