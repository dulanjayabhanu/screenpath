import type {MovieMediaProps} from "@/types/props/MovieMediaProps.ts";
import MediaCard from "@/components/ui/custom/MediaCard.tsx";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";

const MovieMedia = (
    {
        videos,
        watchVideoHookProps,
        youtubeVideoPlayerOpenHookProps
    }: MovieMediaProps ) => {
    return (
        <section className="flex flex-col gap-4 py-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Media</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
                {videos?.results?.filter(video =>
                    video.site.toLowerCase() === "youtube" &&
                    video.official
                ).length < 1 ?
                    (
                        <div className="w-full flex flex-col col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 items-center justify-center">
                            <MovieSearchEmpty />
                        </div>
                    ) : (
                        videos?.results?.filter(video =>
                            video.site.toLowerCase() === "youtube" &&
                            video.official
                        )?.slice(0, 8).map(video1 => (
                            <MediaCard
                                key={video1.id}
                                video={video1}
                                watchVideoHookProps={watchVideoHookProps}
                                youtubeVideoPlayerOpenHookProps={youtubeVideoPlayerOpenHookProps}
                            />
                        ))
                    )}
            </div>
        </section>
    )
}

export default MovieMedia