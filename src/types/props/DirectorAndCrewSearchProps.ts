import * as React from "react";

export type DirectorAndCrewSearchProps = {
    searchTermProps: {
        searchTerm: string
        setSearchTerm: React.Dispatch<React.SetStateAction<string>>
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
    totalResults: number
}