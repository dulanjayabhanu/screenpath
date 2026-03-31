import type {ActorResponse} from "@/types/ActorResponse.ts";
import * as React from "react";

export type ActorSearchResultsProps = {
    data: ActorResponse
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
    searchResultRef: React.RefObject<HTMLDivElement | null>
}