import type {SearchFilterDefaultValues} from "@/types/SearchFilterDefaultValues.ts";

const searchFilterDefaultValues = (): SearchFilterDefaultValues => {
    return (
        {
            searchTerm: "",
            year: "",
            genre: "",
            sortBy: "",
            provider: "",
            language: "",
            ageRating: "",
            adultMode: false,
            page: 1
        }
    )
}

export default searchFilterDefaultValues