import * as React from "react";

export type AdvancedSearchProps = {
    searchTermHookProps: {
        searchTerm: string
        setSearchTerm:  React.Dispatch<React.SetStateAction<string>>
    }
    yearHookProps: {
        selectedYear: string
        setSelectedYear:  React.Dispatch<React.SetStateAction<string>>
    }
    genreHookProps: {
        selectedGenre: string
        setSelectedGenre:  React.Dispatch<React.SetStateAction<string>>
    }
    sortByHookProps: {
        selectedSortBy: string
        setSelectedSortBy:  React.Dispatch<React.SetStateAction<string>>
    }
    providerHookProps: {
        selectedProvider: string
        setSelectedProvider:  React.Dispatch<React.SetStateAction<string>>
    }
    languageHookProps: {
        selectedLanguage: string
        setSelectedLanguage:  React.Dispatch<React.SetStateAction<string>>
    }
    ageRatingHookProps: {
        selectedAgeRating: string
        setSelectedAgeRating:  React.Dispatch<React.SetStateAction<string>>
    }
    adultModeHookProps: {
        selectedAdultMode: boolean
        setSelectedAdultMode:  React.Dispatch<React.SetStateAction<boolean>>
    }
    paginationHookProps: {
        pagination: number
        setPagination:  React.Dispatch<React.SetStateAction<number>>
    }
    tesseractHookProps: {
        tesseractOpen: boolean
        setTesseractOpen: React.Dispatch<React.SetStateAction<boolean>>
    }
    totalResults: number
    searchSectionRef:  React.RefObject<HTMLDivElement | null>
}