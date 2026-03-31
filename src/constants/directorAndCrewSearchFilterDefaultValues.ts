import type {DirectorAndCrewSearchFilterDefaultValues} from "@/types/DirectorAndCrewSearchFilterDefaultValues.ts";

const directorAndCrewSearchFilterDefaultValues = (): DirectorAndCrewSearchFilterDefaultValues => {
    return {
        searchTerm: "",
        gender: "",
        sortBy: "",
        department: "",
    }
}

export default directorAndCrewSearchFilterDefaultValues