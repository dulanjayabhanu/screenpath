import MoviePagination from "@/components/ui/custom/MoviePagination.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";
import ErrorAlert from "@/components/ui/custom/ErrorAlert.tsx";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";
import {useMemo} from "react";
import type {DirectorAndCrewSearchResultsProps} from "@/types/props/DirectorAndCrewSearchResultsProps.ts";
import internalDirectorAndCrewDataSort from "@/utils/internalDirectorAndCrewDataSort.ts";
import type {DirectorAndCrew} from "@/types/DirectorAndCrew.ts";
import InitialSearchResultCard from "@/components/ui/custom/InitialSearchResultCard.tsx";
import DirectorAndCrewCard from "@/components/ui/custom/DirectorAndCrewCard.tsx";

const DirectorAndCrewSearchResults = (
    {
        data,
        isPending,
        isError,
        paginationHookProps,
        genderHookProps,
        sortByHookProps,
        searchResultRef,
        departmentHookProps,
        searchTerm,
    }: DirectorAndCrewSearchResultsProps) => {

    const sortedCrew = useMemo<DirectorAndCrew[]>(() => (
        internalDirectorAndCrewDataSort({
            crew: data?.results || [],
            genderSort: genderHookProps.selectedGender,
            sortBy: sortByHookProps.selectedSortBy,
            department: departmentHookProps.selectedDepartment,
        })
    ), [
        data,
        genderHookProps.selectedGender,
        sortByHookProps.selectedSortBy,
        departmentHookProps.selectedDepartment,
    ])

    return (
        <section className="w-full flex flex-col gap-2 py-2" ref={searchResultRef}>
            <h3 className="text-start">Results</h3>
            <div className="flex justify-center lg:justify-end items-center pt-4 md:pt-0">
                {searchTerm && !isPending && !isError && data?.total_results > 0 ? (
                    <MoviePagination
                        total_results={data?.total_results || 0}
                        total_pages={data?.total_pages || 0}
                        paginationHookProps={paginationHookProps}
                    />
                ) : null}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 py-5 sm:py-8">
                {searchTerm.length < 1 ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <InitialSearchResultCard />
                    </div>
                ) : isPending ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <ProgressSpinner/>
                    </div>
                ) : isError ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <ErrorAlert/>
                    </div>
                ) : sortedCrew?.length > 0 ?
                    sortedCrew?.map((crew) => (
                        <DirectorAndCrewCard
                            key={crew.id}
                            crew={crew}
                        />
                    )): (
                        <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                            <MovieSearchEmpty />
                        </div>
                    )
                }

            </div>
            {searchTerm && !isPending && !isError && data?.total_results > 0 ? (
                <MoviePagination
                    total_results={data?.total_results || 0}
                    total_pages={data?.total_pages || 0}
                    paginationHookProps={paginationHookProps}
                />
            ) : null}
            <Separator />
        </section>
    )
}

export default DirectorAndCrewSearchResults