type SortingType = "ASC" | "DESC"

type Language = {
    iso_639_1: string
    english_name: string
    name: string
}

const languageSort = (data: Language[], sortingType: SortingType): Language[] => {

    let languages: Language[]

    if(sortingType === "ASC"){
        languages = [...data].sort((a, b) =>
            a.english_name.localeCompare(b.english_name)
        )
    }else{
        languages = [...data].sort((a, b) =>
            b.english_name.localeCompare(a.english_name)
        )
    }

    return languages
}

export default languageSort