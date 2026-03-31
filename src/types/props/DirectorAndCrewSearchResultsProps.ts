import * as React from "react";
import type {CrewResponse} from "@/types/CrewResponse.ts";

export type DirectorAndCrewSearchResultsProps = {
    data: CrewResponse
    isPending: boolean
    isError: boolean
    paginationHookProps: {
        pagination: number
        setPagination: React.Dispatch<React.SetStateAction<number>>
    }
    genderHookProps: {
        selectedGender: string
        setSelectedGender: React.Dispatch<React.SetStateAction<string>>
    }
    sortByHookProps: {
        selectedSortBy: string
        setSelectedSortBy: React.Dispatch<React.SetStateAction<string>>
    }
    departmentHookProps: {
        selectedDepartment: string
        setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>
    }
    searchResultRef: React.RefObject<HTMLDivElement | null>
    searchTerm: string
}