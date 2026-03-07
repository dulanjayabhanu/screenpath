import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSearchTerm = () => {
    const { searchTerm: searchTermDefaultValue } = searchFilterDefaultValues()
    const [searchTerm, setSearchTerm] = useState<string>(searchTermDefaultValue)

    return ({
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm
    })
}

export default useSearchTerm