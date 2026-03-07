import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const useSelectedLanguage = () => {
    const { language } = searchFilterDefaultValues()
    const [selectedLanguage, setSelectedLanguage] = useState<string>(language)
    return (
        {
            selectedLanguage: selectedLanguage,
            setSelectedLanguage: setSelectedLanguage
        }
    )
}

export default useSelectedLanguage