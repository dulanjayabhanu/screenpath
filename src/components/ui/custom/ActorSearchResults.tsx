import MoviePagination from "@/components/ui/custom/MoviePagination.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";
import ErrorAlert from "@/components/ui/custom/ErrorAlert.tsx";
import type {ActorSearchResultsProps} from "@/types/props/ActorSearchResultsProps.ts";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";
import internalActorDataSort from "@/utils/internalActorDataSort.ts";
import ActorCard from "@/components/ui/custom/ActorCard.tsx";
import {useMemo} from "react";
import type {Actor} from "@/types/Actor.ts";

const ActorSearchResults = (
    {
        data,
        isPending,
        isError,
        paginationHookProps,
        genderHookProps,
        sortByHookProps,
        searchResultRef,
    }: ActorSearchResultsProps ) => {

    const sortedActors = useMemo<Actor[]>(() => (
        internalActorDataSort({
            actors: data?.results || [],
            genderSort: genderHookProps.selectedGender,
            sortBy: sortByHookProps.selectedSortBy,
        })
    ), [
        data,
        genderHookProps.selectedGender,
        sortByHookProps.selectedSortBy,
    ])

    return (
        <section className="w-full flex flex-col gap-2 py-2" ref={searchResultRef}>
            <h3 className="text-start">Results</h3>
            <div className="flex justify-center lg:justify-end items-center pt-4 md:pt-0">
                {!isPending && !isError && data?.total_results > 0 ? (
                    <MoviePagination
                        total_results={data?.total_results || 0}
                        total_pages={data?.total_pages || 0}
                        paginationHookProps={paginationHookProps}
                    />
                ) : null}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 py-5 sm:py-8">
                {isPending ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <ProgressSpinner/>
                    </div>
                ) : isError ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <ErrorAlert/>
                    </div>
                ) : sortedActors?.length > 0 ?
                    sortedActors?.map((actor) => (
                        <ActorCard
                            key={actor.id}
                            actor={actor}
                        />
                    )): (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <MovieSearchEmpty />
                    </div>
                )}

            </div>
            {!isPending && !isError && data?.total_results > 0 ? (
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

export default ActorSearchResults