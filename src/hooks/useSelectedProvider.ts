import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSelectedProvider = () => {
    const { provider } = searchFilterDefaultValues()
    const [selectedProvider, setSelectedProvider] = useState<string>(provider)
    return (
        {
            selectedProvider: selectedProvider,
            setSelectedProvider: setSelectedProvider
        }
    )
}

export default useSelectedProvider