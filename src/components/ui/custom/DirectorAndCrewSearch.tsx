import SearchBar from "@/components/ui/custom/SearchBar.tsx";
import DirectorAndCrewSearchFilterCard from "@/components/ui/custom/DirectorAndCrewSearchFilterCard.tsx";
import type {DirectorAndCrewSearchProps} from "@/types/props/DirectorAndCrewSearchProps.ts";

const DirectorAndCrewSearch = (
    {
        searchTermProps,
        genderHookProps,
        sortByHookProps,
        departmentHookProps,
        totalResults,
    }: DirectorAndCrewSearchProps) => {
    return (
        <section className="flex flex-col pt-12 sm:pt-15 pb-8 sm:pb-10">
            <div className="w-full flex flex-col sm:w-2/3 md:w-2/3 lg:w-1/2 mx-auto gap-4">
                <SearchBar
                    searchTerm={searchTermProps.searchTerm}
                    setSearchTerm={searchTermProps.setSearchTerm}
                    totalResults={totalResults}
                    placeholder={"Search by director or crew name…"}
                />
                <DirectorAndCrewSearchFilterCard
                    searchTermHookProps={searchTermProps}
                    genderHookProps={genderHookProps}
                    sortByHookProps={sortByHookProps}
                    departmentHookProps={departmentHookProps}
                />
                {/*<div className="w-full bg-violet-950 p-4 rounded border flex flex-col items-start gap-2">*/}
                {/*    <h1>Search term : {searchTermProps.searchTerm}</h1>*/}
                {/*    <h1>Department : {departmentHookProps.selectedDepartment}</h1>*/}
                {/*    <h1>Gender : {genderHookProps.selectedGender}</h1>*/}
                {/*    <h1>Sort By : {sortByHookProps.selectedSortBy}</h1>*/}
                {/*</div>*/}
            </div>

        </section>
    )
}

export default DirectorAndCrewSearch