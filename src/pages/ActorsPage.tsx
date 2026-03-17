import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import SubPageHero from "@/components/ui/custom/SubPageHero.tsx";
import ActorSearch from "@/components/ui/custom/ActorSearch.tsx";
import ActorSearchResults from "@/components/ui/custom/ActorSearchResults.tsx";
import useSearchTerm from "@/hooks/useSearchTerm.ts";
import useSelectedGender from "@/hooks/useSelectedGender.ts";
import useSelectedActorSortBy from "@/hooks/useSelectedActorSortBy.ts";
import {useDebounce} from "use-debounce";
import movieApiActorSearchQueryOption from "@/query_options/movieApiActorSearchQueryOption.ts";
import {useQuery} from "@tanstack/react-query";
import usePagination from "@/hooks/usePagination.ts";
import {useEffect, useMemo, useRef} from "react";
import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";
import BreadCrumb from "@/components/ui/custom/BreadCrumb.tsx";

const ActorsPage = () => {
    const { searchTerm, setSearchTerm } = useSearchTerm()
    const { selectedGender, setSelectedGender } = useSelectedGender()
    const { selectedSortBy, setSelectedSortBy } = useSelectedActorSortBy()
    const { pagination, setPagination } = usePagination()

    const searchResultRef = useRef<HTMLDivElement | null>(null)
    const firstTimePageRender = useRef<boolean>(true)

    const [ debounceSearchTerm ] = useDebounce(searchTerm, 1000 * 2)
    const actorSearchProps: ActorSearchProps = useMemo<ActorSearchProps>(() => (
        {
            searchTerm: debounceSearchTerm,
            page: pagination,
        }
    ), [
        debounceSearchTerm,
        pagination
    ])
    const { data, isPending, isError } = useQuery(movieApiActorSearchQueryOption(actorSearchProps))

    const isValidDataLoad: boolean = (data?.results?.length || 0) > 0 || isError
    useEffect(() => {
        if(!firstTimePageRender.current){
            searchResultRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }else if(isValidDataLoad){
            firstTimePageRender.current = false
        }
    }, [
        actorSearchProps,
        isValidDataLoad,
        selectedGender,
        selectedSortBy,
    ])

    useEffect(() => {
        setPagination(1)
    }, [
        debounceSearchTerm,
        selectedGender,
        selectedSortBy,
    ])

    useEffect(() => {
        document.title = "The Actors - ScreenPath"
    }, [])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <TooltipProvider>

                <div className="min-h-screen relative">
                    <GridPatternTop/>
                    <GridPatternBottom/>

                    <NavBar />
                    <BackToTopFab />

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                        <BreadCrumb endpoints={[
                            {
                                name: "The Actors",
                            }
                        ]}/>
                        <SubPageHero />
                        <ActorSearch
                            searchTermProps={
                                {
                                    searchTerm: searchTerm,
                                    setSearchTerm: setSearchTerm
                                }
                            }
                            genderHookProps={
                                {
                                    selectedGender: selectedGender,
                                    setSelectedGender: setSelectedGender
                                }
                            }
                            sortByHookProps={
                                {
                                    selectedSortBy: selectedSortBy,
                                    setSelectedSortBy: setSelectedSortBy
                                }
                            }
                            totalResults={data?.total_results || 0}
                        />
                        <ActorSearchResults
                            data={data || {
                                page: 0,
                                results: [],
                                total_pages: 0,
                                total_results: 0,
                            }}
                            isPending={isPending}
                            isError={isError}
                            paginationHookProps={
                                {
                                    pagination: pagination,
                                    setPagination: setPagination,
                                }
                            }
                            genderHookProps={
                                {
                                    selectedGender: selectedGender,
                                    setSelectedGender: setSelectedGender
                                }
                            }
                            sortByHookProps={
                                {
                                    selectedSortBy: selectedSortBy,
                                    setSelectedSortBy: setSelectedSortBy
                                }
                            }
                            searchResultRef={searchResultRef}
                        />
                        <Footer />
                    </div>
                </div>

            </TooltipProvider>

        </ThemeProvider>
    )
}

export default ActorsPage