import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import SubPageHero from "@/components/ui/custom/SubPageHero.tsx";
import useSearchTerm from "@/hooks/useSearchTerm.ts";
import useSelectedGender from "@/hooks/useSelectedGender.ts";
import useSelectedActorSortBy from "@/hooks/useSelectedActorSortBy.ts";
import {useDebounce} from "use-debounce";
import {useQuery} from "@tanstack/react-query";
import usePagination from "@/hooks/usePagination.ts";
import {useEffect, useMemo, useRef} from "react";
import type {ActorSearchProps} from "@/types/ActorSearchProps.ts";
import BreadCrumb from "@/components/ui/custom/BreadCrumb.tsx";
import DirectorAndCrewSearch from "@/components/ui/custom/DirectorAndCrewSearch.tsx";
import useSelectedDepartment from "@/hooks/useSelectedDepartment.ts";
import DirectorAndCrewSearchResults from "@/components/ui/custom/DirectorAndCrewSearchResults.tsx";
import movieApiDirectorAndCrewSearchQueryOption from "@/query_options/movieApiDirectorAndCrewSearchQueryOption.ts";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";
import MainContextMenu from "@/components/ui/custom/MainContextMenu.tsx";

const DirectorsAndCrewSearch = () => {
    const { searchTerm, setSearchTerm } = useSearchTerm()
    const { selectedGender, setSelectedGender } = useSelectedGender()
    const { selectedSortBy, setSelectedSortBy } = useSelectedActorSortBy()
    const { selectedDepartment, setSelectedDepartment } = useSelectedDepartment()
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
    const { data, isPending, isError } = useQuery(movieApiDirectorAndCrewSearchQueryOption(actorSearchProps))

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
        selectedDepartment,
    ])

    useEffect(() => {
        setPagination(1)
    }, [
        debounceSearchTerm,
        selectedGender,
        selectedSortBy,
        selectedDepartment,
    ])

    useEffect(() => {
        document.title = "The Directors & Crew - ScreenPath"
    }, [])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <TooltipProvider>

                <ContextMenu>
                    <ContextMenuTrigger>

                        <MainContextMenu
                            reloadPath={"/crews"}
                        />

                        <div className="min-h-screen relative">
                            <GridPatternTop/>
                            <GridPatternBottom/>

                            <NavBar />
                            <BackToTopFab />

                            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                                <BreadCrumb endpoints={[
                                    {
                                        name: "The Directors & Crew",
                                    }
                                ]}/>
                                <SubPageHero
                                    title={"The Directors & Crew"}
                                    tagline={"Explore the Directors and Crew"}
                                />
                                <DirectorAndCrewSearch
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
                                    departmentHookProps={
                                        {
                                            selectedDepartment: selectedDepartment,
                                            setSelectedDepartment: setSelectedDepartment
                                        }
                                    }
                                    totalResults={data?.total_results || 0}
                                />
                                <DirectorAndCrewSearchResults
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
                                    departmentHookProps={
                                        {
                                            selectedDepartment: selectedDepartment,
                                            setSelectedDepartment: setSelectedDepartment
                                        }
                                    }
                                    searchResultRef={searchResultRef}
                                    searchTerm={debounceSearchTerm}
                                />
                                <Footer />
                            </div>
                        </div>

                    </ContextMenuTrigger>
                </ContextMenu>

            </TooltipProvider>

        </ThemeProvider>
    )
}

export default DirectorsAndCrewSearch