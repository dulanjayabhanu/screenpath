import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSelectedGenre = () => {
    const { genre } = searchFilterDefaultValues()
    const [selectedGenre, setSelectedGenre] = useState<string>(genre)
    return (
        {
            selectedGenre: selectedGenre,
            setSelectedGenre: setSelectedGenre
        }
    )
}

export default useSelectedGenre