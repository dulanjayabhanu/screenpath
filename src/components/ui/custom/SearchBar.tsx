import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {Search} from "lucide-react";
import formatNumbers from "@/utils/formatNumbers.ts";
import type {SearchBarProps} from "@/types/props/SearchBarProps.ts";

const SearchBar = (
    {
        searchTerm,
        setSearchTerm,
        totalResults,
    }: SearchBarProps) => {
    const formattedTotalResults = formatNumbers(totalResults)

    return (
        <InputGroup>
            <InputGroupInput placeholder="Search by movie title…" value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
            }}/>
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">{formattedTotalResults} results</InputGroupAddon>
        </InputGroup>
    )
}

export default SearchBar