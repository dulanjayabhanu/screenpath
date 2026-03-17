import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import ActorShowcase from "@/components/ui/custom/ActorShowcase.tsx";
import BreadCrumb from "@/components/ui/custom/BreadCrumb.tsx";
import ActorMovieCredits from "@/components/ui/custom/ActorMovieCredits.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useParams} from "react-router";
import movieApiSingleActorQueryOption from "@/query_options/movieApiSingleActorQueryOption.ts";
import {useQuery} from "@tanstack/react-query";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";
import ErrorAlert from "@/components/ui/custom/ErrorAlert.tsx";
import movieApiLanguageQueryOption from "@/query_options/movieApiLanguageQueryOption.ts";
import {useEffect} from "react";

const ActorDetailsPage = () => {

    const { actorId } = useParams()

    const { data: languageData } = useQuery(movieApiLanguageQueryOption())
    const { data: actorData, isPending, isError } = useQuery(movieApiSingleActorQueryOption(actorId || ""))

    useEffect(() => {
        document.title = `${isPending ? "Processing..." : actorData ? actorData.name || "N/A" : "Actor Credits" } - ScreenPath`
    }, [isPending, actorData])

    const renderDynamicComponents = () => {
        return (
            <>
                <BreadCrumb endpoints={[
                    {
                        path: "/actors",
                        name: "The Actors",
                    },
                    {
                        name: actorData?.name || "N/A",
                    }
                ]}/>
                <ActorShowcase
                    name={actorData?.name || "N/A"}
                    gender={actorData?.gender || 2}
                    birthday={actorData?.birthday || ""}
                    knownAs={actorData?.also_known_as || []}
                    biography={actorData?.biography || "N/A"}
                    placeOfBirth={actorData?.place_of_birth || "N/A"}
                    deathDay={actorData?.deathday || ""}
                    homePage={actorData?.homepage || ""}
                    imdbId={actorData?.imdb_id || ""}
                    profilePath={actorData?.profile_path || ""}
                />
                <ActorMovieCredits
                    movieCredits={actorData?.movie_credits || {
                        cast: [],
                        crew: []
                    }}
                    languageData={languageData || []}
                />
            </>
        )
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <TooltipProvider>

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

            </TooltipProvider>

        </ThemeProvider>
    )
}

export default ActorDetailsPage