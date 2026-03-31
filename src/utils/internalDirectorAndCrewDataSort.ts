import type {InternalDirectorAndCrewDataSortProps} from "@/types/props/InternalDirectorAndCrewDataSortProps.ts";
import getDepartmentOptions from "@/utils/getDepartmentOptions.ts";
import type {DirectorAndCrew} from "@/types/DirectorAndCrew.ts";

const internalDirectorAndCrewDataSort = (
    {
        crew,
        genderSort,
        sortBy,
        department,
    }: InternalDirectorAndCrewDataSortProps): DirectorAndCrew[] => {

    let sortedCrew: DirectorAndCrew[] = [...crew]

    const departmentOptions: string[] = getDepartmentOptions()
    sortedCrew = sortedCrew.filter((crew) =>
        departmentOptions.includes(crew.known_for_department)
    )

    if(genderSort){
        sortedCrew = crew.filter((crew) =>
            String(crew.gender) === genderSort
        )
    }

    if(sortBy){
        if(sortBy === "popularity.desc"){
            sortedCrew = sortedCrew.sort((a, b) =>
                b.popularity - a.popularity
            )
        }else{
            sortedCrew = sortedCrew.sort((a, b) =>
                a.popularity - b.popularity
            )
        }
    }

    if(department){
        sortedCrew = sortedCrew.filter((crew) =>
            crew.known_for_department === department
        )
    }

    return sortedCrew
}

export default internalDirectorAndCrewDataSort