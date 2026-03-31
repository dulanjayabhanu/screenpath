import * as React from "react";

export type DirectorAndCrewSearchFilterCardProps = {
    genderHookProps: {
        selectedGender: string
        setSelectedGender: React.Dispatch<React.SetStateAction<string>>
    }
    sortByHookProps: {
        selectedSortBy: string
        setSelectedSortBy: React.Dispatch<React.SetStateAction<string>>
    }
    searchTermHookProps: {
        searchTerm: string
        setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    }
    departmentHookProps: {
        selectedDepartment: string,
        setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>
    }
}