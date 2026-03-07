import * as React from "react";

export type SearchBarProps = {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    totalResults: number
}