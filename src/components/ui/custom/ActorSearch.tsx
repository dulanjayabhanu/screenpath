import SearchBar from "@/components/ui/custom/SearchBar.tsx";
import ActorSearchFilterCard from "@/components/ui/custom/ActorSearchFilterCard.tsx";
import type {ActorSearchProps} from "@/types/props/ActorSearchProps.ts";

const ActorSearch = (
    {
        searchTermProps,
        genderHookProps,
        sortByHookProps,
        totalResults,
    }: ActorSearchProps) => {
    return (
        <section className="flex flex-col pt-12 sm:pt-15 pb-8 sm:pb-10">
            <div className="w-full flex flex-col sm:w-2/3 md:w-2/3 lg:w-1/2 mx-auto gap-4">
                <SearchBar
                    searchTerm={searchTermProps.searchTerm}
                    setSearchTerm={searchTermProps.setSearchTerm}
                    totalResults={totalResults}
                    placeholder={"Search by actor name…"}
                />
                <ActorSearchFilterCard
                    searchTermHookProps={searchTermProps}
                    genderHookProps={genderHookProps}
                    sortByHookProps={sortByHookProps}
                />
            </div>

        </section>
    )
}

export default ActorSearch