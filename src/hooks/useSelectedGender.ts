import {useState} from "react";
import actorSearchFilterDefaultValues from "@/constants/actorSearchFilterDefaultValues.ts";

const useSelectedGender = () => {
    const { gender } = actorSearchFilterDefaultValues()
    const [ selectedGender, setSelectedGender ] = useState<string>(gender)
    return {
        selectedGender: selectedGender,
        setSelectedGender: setSelectedGender,
    }
}

export default useSelectedGender