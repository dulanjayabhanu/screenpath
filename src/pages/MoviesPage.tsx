import {useParams} from "react-router";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import MovieShowcase from "@/components/ui/custom/MovieShowcase.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import DirectorAndWriter from "@/components/ui/custom/DirectorAndWriter.tsx";
import Cast from "@/components/ui/custom/Cast.tsx";
import Crew from "@/components/ui/custom/Crew.tsx";
import ProductionCompany from "@/components/ui/custom/ProductionCompany.tsx";
import BudgetAndRevenue from "@/components/ui/custom/BudgetAndRevenue.tsx";
import Recommendations from "@/components/ui/custom/Recommendations.tsx";
import BreadCrumb from "@/components/ui/custom/BreadCrumb.tsx";
import movieApiSingleMovieQueryOption from "@/query_options/movieApiSingleMovieQueryOption.ts";
import {useQuery} from "@tanstack/react-query";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";
import ErrorAlert from "@/components/ui/custom/ErrorAlert.tsx";
import MovieMedia from "@/components/ui/custom/MovieMedia.tsx";
import YoutubeVideoPlayer from "@/components/ui/custom/YoutubeVideoPlayer.tsx";
import useWatchVideo from "@/hooks/useWatchVideo.ts";
import useYoutubeVideoPlayerOpen from "@/hooks/useYoutubeVideoPlayerOpen.ts";
import {useEffect} from "react";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";

const MoviesPage = () => {
    const { movieId } = useParams<{ movieId: string }>()
    const { watchVideo, setWatchVideo } = useWatchVideo()
    const { youtubeVideoPlayerOpen, setYoutubeVideoPlayerOpen } = useYoutubeVideoPlayerOpen()

    const { data, isPending, isError } = useQuery(movieApiSingleMovieQueryOption(movieId || "0"))

    useEffect(() => {
        if(isPending) {
            document.title = "Processing... | ScreenPath"
        }else if(data?.title) {
            document.title = data?.title ? `${data?.title} | ScreenPath` : "Movie Detail | ScreenPath"
        }
    }, [data, isPending])

    const renderMovieContent = () => {
        return (
            <>
                <BreadCrumb movieName={data?.title || "N/A"}/>
                <MovieShowcase
                    backdrop_path={data?.backdrop_path || null}
                    title={data?.title || ""}
                    release_date={data?.release_date || ""}
                    tagline={data?.tagline || ""}
                    overview={data?.overview || ""}
                    vote_average={data?.vote_average || 0}
                    origin_country={data?.origin_country || []}
                    origin_language={data?.original_language || ""}
                    runtime={data?.runtime || 0}
                    genres={data?.genres || []}
                    keywords={data?.keywords || {keywords: []}}
                />
                <Separator />
                <DirectorAndWriter
                    crew={data?.credits?.crew || []}
                />
                <Separator />
                <Cast
                    cast={data?.credits?.cast || []}
                />
                <Crew
                    crew={data?.credits?.crew || []}
                />
                <Separator />
                <ProductionCompany
                    productionCompany={data?.production_companies || []}
                />
                <Separator />
                <BudgetAndRevenue
                    budget={data?.budget || 0}
                    revenue={data?.revenue || 0}
                />
                <Separator />
                <MovieMedia
                    videos={data?.videos || {
                        results: []
                    }}
                    watchVideoHookProps={
                        {
                            watchVideo: watchVideo,
                            setWatchVideo: setWatchVideo
                        }
                    }
                    youtubeVideoPlayerOpenHookProps={
                        {
                            youtubeVideoPlayerOpen: youtubeVideoPlayerOpen,
                            setYoutubeVideoPlayerOpen: setYoutubeVideoPlayerOpen
                        }
                    }
                />
                <YoutubeVideoPlayer
                    watchVideoHookProps={
                        {
                            watchVideo: watchVideo,
                            setWatchVideo: setWatchVideo
                        }
                    }
                    youtubeVideoPlayerOpenHookProps={
                        {
                            youtubeVideoPlayerOpen: youtubeVideoPlayerOpen,
                            setYoutubeVideoPlayerOpen: setYoutubeVideoPlayerOpen
                        }
                    }
                />
                <Separator />
                <Recommendations
                    recommendations={data?.recommendations || {
                        page: 0,
                        results: [],
                        total_pages: 0,
                        total_results: 0
                    }}
                />
            </>
        )
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <div className="min-h-screen relative">
                <GridPatternTop/>
                <GridPatternBottom/>

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
                        renderMovieContent()
                    )}
                    <Separator />
                    <Footer />
                </div>
            </div>

        </ThemeProvider>
    )
}

export default MoviesPage