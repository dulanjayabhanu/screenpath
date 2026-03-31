import {useState} from "react";
import directorAndCrewSearchFilterDefaultValues from "@/constants/directorAndCrewSearchFilterDefaultValues.ts";

const useSelectedDepartment = () => {
    const { department } = directorAndCrewSearchFilterDefaultValues()
    const [ selectedDepartment, setSelectedDepartment ] = useState<string>(department)
    return {
        selectedDepartment: selectedDepartment,
        setSelectedDepartment: setSelectedDepartment
    }
}

export default useSelectedDepartment