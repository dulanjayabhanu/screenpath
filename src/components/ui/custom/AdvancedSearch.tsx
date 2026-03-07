import {EyeClosed} from "lucide-react"
import {Separator} from "@/components/ui/separator.tsx";
import SearchFilterCard from "@/components/ui/custom/SearchFilterCard.tsx";
import getMovieYears from "@/utils/getMovieYears.ts";
import SearchBar from "@/components/ui/custom/SearchBar.tsx";
import {useQuery} from "@tanstack/react-query";
import movieApiGenreQueryOption from "@/query_options/movieApiGenreQueryOption.ts";
import getSortByOptions from "@/utils/getSortByOptions.ts";
import movieApiProviderQueryOption from "@/query_options/movieApiProviderQueryOption.ts";
import movieApiLanguageQueryOption from "@/query_options/movieApiLanguageQueryOption.ts";
import movieApiAgeRatingQueryOption from "@/query_options/movieApiAgeRatingQueryOption.ts";
import type {AdvancedSearchProps} from "@/types/props/AdvancedSearchProps.ts";
import type {SortBy} from "@/types/SortBy.ts";

const AdvancedSearch = (
    {
        searchTermHookProps,
        yearHookProps,
        genreHookProps,
        sortByHookProps,
        providerHookProps,
        languageHookProps,
        ageRatingHookProps,
        adultModeHookProps,
        paginationHookProps,
        tesseractHookProps,
        totalResults,
        searchSectionRef,
    }: AdvancedSearchProps) => {

    const { data: genreData } = useQuery(movieApiGenreQueryOption())
    const { data: providerData } = useQuery(movieApiProviderQueryOption())
    const { data: languageData } = useQuery(movieApiLanguageQueryOption())
    const { data: ageRatingData } = useQuery(movieApiAgeRatingQueryOption())

    const movieYears: string[] = getMovieYears()
    const sortByOptions: SortBy[] = getSortByOptions()

    return (
        <section className="flex flex-col pt-12 sm:pt-15 pb-8 sm:pb-10" ref={searchSectionRef}>

            <div className="flex flex-col w-full gap-4 items-center justify-center pb-5">
                <EyeClosed size={40} />
                <div className="flex gap-2">
                    <h1 className="scroll-m-20 text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-balance">
                        Search Without
                    </h1>
                    <h1 className="scroll-m-20 text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-balance rotate-y-180 hover:rotate-y-0 text-red-500 hover:text-foreground">
                        Distractions
                    </h1>
                </div>
                <p className="leading-6 sm:leading-7 not-first:mt-2 text-muted-foreground text-justify sm:text-center max-w-3xl text-md">
                    A calm black-and-white interface that highlights new releases, lets you filter movies easily, and shows official trailers and key details, helping you focus on discovering the movies that truly matter.
                </p>
                <Separator className="my-10 sm:my-15"/>
            </div>

            <div className="w-full flex flex-col sm:w-2/3 md:w-2/3 lg:w-1/2 mx-auto gap-4">
                <SearchBar
                    searchTerm={searchTermHookProps.searchTerm}
                    setSearchTerm={searchTermHookProps.setSearchTerm}
                    totalResults={totalResults}
                />
                <SearchFilterCard
                    movieYears={movieYears}
                    genres={genreData || {genres: []}}
                    sortByOptions={sortByOptions}
                    providers={providerData || {results: []}}
                    languages={languageData || []}
                    ageRatings={ageRatingData || {certifications: {US: []}}}
                    searchTermHookProps={searchTermHookProps}
                    yearHookProps={
                        {
                            selectedYear: yearHookProps.selectedYear,
                            setSelectedYear: yearHookProps.setSelectedYear
                        }
                    }
                    genreHookProps={
                        {
                            selectedGenre: genreHookProps.selectedGenre,
                            setSelectedGenre: genreHookProps.setSelectedGenre
                        }
                    }
                    sortByHookProps={
                        {
                            selectedSortBy: sortByHookProps.selectedSortBy,
                            setSelectedSortBy: sortByHookProps.setSelectedSortBy
                        }
                    }
                    providerHookProps={
                        {
                            selectedProvider: providerHookProps.selectedProvider,
                            setSelectedProvider: providerHookProps.setSelectedProvider
                        }
                    }
                    languageHookProps={
                        {
                            selectedLanguage: languageHookProps.selectedLanguage,
                            setSelectedLanguage: languageHookProps.setSelectedLanguage
                        }
                    }
                    ageRatingHookProps={
                        {
                            selectedAgeRating: ageRatingHookProps.selectedAgeRating,
                            setSelectedAgeRating: ageRatingHookProps.setSelectedAgeRating
                        }
                    }
                    adultModeHookProps={
                        {
                            selectedAdultMode: adultModeHookProps.selectedAdultMode,
                            setSelectedAdultMode: adultModeHookProps.setSelectedAdultMode
                        }
                    }
                    tesseractHookProps={
                        {
                            tesseractOpen: tesseractHookProps.tesseractOpen,
                            setTesseractOpen: tesseractHookProps.setTesseractOpen
                        }
                    }
                    paginationHookProps={paginationHookProps}
                />
            </div>

        </section>
    )
}

export default AdvancedSearch