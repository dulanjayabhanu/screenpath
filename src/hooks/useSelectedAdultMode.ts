import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSelectedAdultMode = () => {
    const { adultMode } = searchFilterDefaultValues()
    const [selectedAdultMode, setSelectedAdultMode] = useState<boolean>(adultMode)

    return (
        {
            selectedAdultMode: selectedAdultMode,
            setSelectedAdultMode: setSelectedAdultMode
        }
    )
}

export default useSelectedAdultMode