import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import movieApiLanguageQueryOption from "@/query_options/movieApiLanguageQueryOption.ts";
import movieApiSingleActorQueryOption from "@/query_options/movieApiSingleActorQueryOption.ts";
import {useEffect} from "react";
import BreadCrumb from "@/components/ui/custom/BreadCrumb.tsx";
import ActorShowcase from "@/components/ui/custom/ActorShowcase.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";
import ErrorAlert from "@/components/ui/custom/ErrorAlert.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import DirectorAndCrewMovieCredits from "@/components/ui/custom/DirectorAndCrewMovieCredits.tsx";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";
import MainContextMenu from "@/components/ui/custom/MainContextMenu.tsx";

const DirectorAndCrewDetailsPage = () => {
    const { crewId } = useParams()

    const { data: languageData } = useQuery(movieApiLanguageQueryOption())
    const { data: crewData, isPending, isError } = useQuery(movieApiSingleActorQueryOption(crewId || ""))

    useEffect(() => {
        document.title = `${isPending ? "Processing..." : crewData ? crewData.name || "N/A" : "Crew Credits" } - ScreenPath`
    }, [isPending, crewData])

    const renderDynamicComponents = () => {
        return (
            <>
                <BreadCrumb endpoints={[
                    {
                        path: "/crews",
                        name: "The Directors & Crew",
                    },
                    {
                        name: crewData?.name || "N/A",
                    }
                ]}/>
                <ActorShowcase
                    name={crewData?.name || "N/A"}
                    gender={crewData?.gender || 2}
                    birthday={crewData?.birthday || ""}
                    knownAs={crewData?.also_known_as || []}
                    biography={crewData?.biography || "N/A"}
                    placeOfBirth={crewData?.place_of_birth || "N/A"}
                    deathDay={crewData?.deathday || ""}
                    homePage={crewData?.homepage || ""}
                    imdbId={crewData?.imdb_id || ""}
                    profilePath={crewData?.profile_path || ""}
                />
                <DirectorAndCrewMovieCredits
                    movieCredits={crewData?.movie_credits || {
                        cast: [],
                        crew: []
                    }}
                    languageData={languageData || []}
                    gender={crewData?.gender || 2}
                    profilePath={crewData?.profile_path || ""}
                />
            </>
        )
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <TooltipProvider>

                <ContextMenu>
                    <ContextMenuTrigger>

                        <MainContextMenu
                            reloadPath={`/crew/${crewId}`}
                        />

                        <div className="min-h-screen relative">
                            <GridPatternTop />
                            <GridPatternBottom />

                            <NavBar />
                            <BackToTopFab />

                            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                                {isPending ? (
                                    <div className="flex flex-col items-center justify-center h-svh">
                                        <ProgressSpinner/>
                                    </div>
                                ) : isError ? (
                                    <div className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-15">
                                        <ErrorAlert/>
                                    </div>
                                ) : (
                                    renderDynamicComponents()
                                )}
                                <Separator />
                                <Footer />
                            </div>
                        </div>

                    </ContextMenuTrigger>
                </ContextMenu>

            </TooltipProvider>

        </ThemeProvider>
    )
}

export default DirectorAndCrewDetailsPage