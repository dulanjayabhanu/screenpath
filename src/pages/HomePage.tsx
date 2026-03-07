import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/ui/custom/NavBar.tsx";
import Hero from "@/components/ui/custom/Hero.tsx";
import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import SearchResults from "@/components/ui/custom/SearchResults.tsx";
import AdvancedSearch from "@/components/ui/custom/AdvancedSearch.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import useSelectedAdultMode from "@/hooks/useSelectedAdultMode.ts";
import useSelectedYear from "@/hooks/useSelectedYear.ts";
import useSelectedGenre from "@/hooks/useSelectedGenre.ts";
import useSelectedSortBy from "@/hooks/useSelectedSortBy.ts";
import useSelectedProvider from "@/hooks/useSelectedProvider.ts";
import useSelectedLanguage from "@/hooks/useSelectedLanguage.ts";
import useSelectedAgeRating from "@/hooks/useSelectedAgeRating.ts";
import useSearchTerm from "@/hooks/useSearchTerm.ts";
import {useDebounce} from "use-debounce";
import {useEffect, useMemo, useRef} from "react";
import movieApiSearchQueryOption from "@/query_options/movieApiSearchQueryOption.ts";
import {useQuery} from "@tanstack/react-query";
import usePagination from "@/hooks/usePagination.ts";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";
import useTesseractOpen from "@/hooks/useTesseractOpen.ts";
import Tesseract from "@/components/ui/custom/Tesseract.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";

type MovieSearchProp = {
    searchTerm: string
    year: string
    genre: string
    sortBy: string
    provider: string
    language: string
    ageRating: string
    adultMode: boolean
    page: number
}

const HomePage = () => {
    const { searchTerm, setSearchTerm } = useSearchTerm()
    const { selectedAdultMode, setSelectedAdultMode } = useSelectedAdultMode()
    const { selectedYear, setSelectedYear } = useSelectedYear()
    const { selectedGenre, setSelectedGenre } = useSelectedGenre()
    const { selectedSortBy, setSelectedSortBy } = useSelectedSortBy()
    const { selectedProvider, setSelectedProvider } = useSelectedProvider()
    const { selectedLanguage, setSelectedLanguage } = useSelectedLanguage()
    const { selectedAgeRating, setSelectedAgeRating } = useSelectedAgeRating()
    const { pagination, setPagination } = usePagination()
    const { tesseractOpen, setTesseractOpen } = useTesseractOpen()

    const searchSectionRef = useRef<HTMLDivElement | null>(null)
    const movieResultRef = useRef<HTMLDivElement | null>(null)
    const firstTimePageRender = useRef<boolean>(true)

    const [ debouncedSearchTerm ] = useDebounce(searchTerm, 1000 * 2)
    const movieSearchProp = useMemo<MovieSearchProp>(() => (
        {
            searchTerm: debouncedSearchTerm,
            year: selectedYear,
            genre: selectedGenre,
            sortBy: selectedSortBy,
            provider: selectedProvider,
            language: selectedLanguage,
            ageRating: selectedAgeRating,
            adultMode: selectedAdultMode,
            page: pagination,
        }
    ), [
        debouncedSearchTerm,
        selectedYear,
        selectedGenre,
        selectedSortBy,
        selectedProvider,
        selectedLanguage,
        selectedAgeRating,
        selectedAdultMode,
        pagination,
    ])
    const { data, isPending, isError } = useQuery(movieApiSearchQueryOption(movieSearchProp))

    const isValidDataLoaded: boolean = (data?.results.length || 0) > 0 ||
        data?.results.length === 0 ||
        isError

    useEffect(() => {
        if(!firstTimePageRender.current){
            movieResultRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        } else if(isValidDataLoaded){
            firstTimePageRender.current = false
        }
    }, [
        movieSearchProp,
        isValidDataLoaded,
    ])

    useEffect(() => {
        setPagination(searchFilterDefaultValues().page)
    }, [
        searchTerm,
        selectedYear,
        selectedGenre,
        selectedSortBy,
        selectedProvider,
        selectedLanguage,
        selectedAgeRating,
        selectedAdultMode
    ])

    useEffect(() => {
        document.title = "ScreenPath | Your calm path to the perfect movie"
    }, []);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <TooltipProvider>

                <div className="min-h-screen relative">
                    <GridPatternTop/>
                    <GridPatternBottom/>

                    <NavBar />
                    <BackToTopFab />

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                        <Hero searchSectionRef={searchSectionRef}/>
                        <Separator />
                        <AdvancedSearch
                            searchTermHookProps={
                                {
                                    searchTerm: searchTerm,
                                    setSearchTerm: setSearchTerm
                                }
                            }
                            yearHookProps={
                                {
                                    selectedYear: selectedYear,
                                    setSelectedYear: setSelectedYear
                                }
                            }
                            genreHookProps={
                                {
                                    selectedGenre: selectedGenre,
                                    setSelectedGenre: setSelectedGenre
                                }
                            }
                            sortByHookProps={
                                {
                                    selectedSortBy: selectedSortBy,
                                    setSelectedSortBy: setSelectedSortBy
                                }
                            }
                            providerHookProps={
                                {
                                    selectedProvider: selectedProvider,
                                    setSelectedProvider: setSelectedProvider
                                }
                            }
                            languageHookProps={
                                {
                                    selectedLanguage: selectedLanguage,
                                    setSelectedLanguage: setSelectedLanguage
                                }
                            }
                            ageRatingHookProps={
                                {
                                    selectedAgeRating: selectedAgeRating,
                                    setSelectedAgeRating: setSelectedAgeRating
                                }
                            }
                            adultModeHookProps={
                                {
                                    selectedAdultMode: selectedAdultMode,
                                    setSelectedAdultMode: setSelectedAdultMode
                                }
                            }
                            paginationHookProps={
                                {
                                    pagination: pagination,
                                    setPagination: setPagination
                                }
                            }
                            tesseractHookProps={
                                {
                                    tesseractOpen: tesseractOpen,
                                    setTesseractOpen: setTesseractOpen
                                }
                            }
                            totalResults={data?.total_results || 0}
                            searchSectionRef={searchSectionRef}
                        />
                        <Tesseract
                            tesseractHookProps = {
                                {
                                    tesseractOpen: tesseractOpen,
                                    setTesseractOpen: setTesseractOpen
                                }
                            }
                        />
                        <SearchResults
                            searchedMovieProps={
                                {
                                    movieResponse: data || {
                                        page: 0,
                                        results: [],
                                        total_pages: 0,
                                        total_results: 0,
                                    },
                                    isPending: isPending,
                                    isError: isError,
                                }
                            }
                            paginationHookProps={
                                {
                                    pagination: pagination,
                                    setPagination: setPagination
                                }
                            }
                            movieResultRef={movieResultRef}
                        />
                        <Footer />
                    </div>
                </div>

            </TooltipProvider>

        </ThemeProvider>
    )
}

export default HomePage