import MovieCard from "@/components/ui/custom/MovieCard.tsx";
import MoviePagination from "@/components/ui/custom/MoviePagination.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";
import ErrorAlert from "@/components/ui/custom/ErrorAlert.tsx";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";
import type {SearchResultsProps} from "@/types/props/SearchResultProps.ts";

const SearchResults = (
    {
        searchedMovieProps,
        paginationHookProps,
        movieResultRef,
    }: SearchResultsProps) => {

    return (
        <section className="w-full flex flex-col gap-2 py-2" ref={movieResultRef}>
            <h3 className="text-start">Movie Results</h3>
            <div className="flex justify-center lg:justify-end items-center pt-4 md:pt-0">
                {!searchedMovieProps.isError ? (
                    <MoviePagination
                        total_results={searchedMovieProps.movieResponse.total_results}
                        total_pages={searchedMovieProps.movieResponse.total_pages || 1}
                        paginationHookProps={paginationHookProps}
                    />
                ) : null}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 py-5 sm:py-8">
                {searchedMovieProps.isPending ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <ProgressSpinner/>
                    </div>
                ) : searchedMovieProps.isError ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <ErrorAlert/>
                    </div>
                ): searchedMovieProps.movieResponse.results.length < 1 ? (
                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                        <MovieSearchEmpty />
                    </div>
                ) : searchedMovieProps.movieResponse.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            {!searchedMovieProps.isError ? (
                <MoviePagination
                    total_results={searchedMovieProps.movieResponse.total_results}
                    total_pages={searchedMovieProps.movieResponse.total_pages || 1}
                    paginationHookProps={paginationHookProps}
                />
            ) : null}
            <Separator />
        </section>
    )
}

export default SearchResults