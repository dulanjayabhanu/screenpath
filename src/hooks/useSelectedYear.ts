import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSelectedYear = () => {
    const { year } = searchFilterDefaultValues()
    const [selectedYear, setSelectedYear] = useState<string>(year)

    return (
        {
            selectedYear: selectedYear,
            setSelectedYear: setSelectedYear
        }
    )
}

export default useSelectedYear