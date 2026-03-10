import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {Calendar, Clapperboard, Globe, Languages, Star} from "lucide-react";
import {Item, ItemContent, ItemDescription, ItemGroup, ItemHeader} from "@/components/ui/item.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import type {MovieShowcaseProps} from "@/types/props/MovieShowcaseProps.ts";

const MovieShowcase = (
    {
        backdrop_path,
        title,
        release_date,
        tagline,
        overview,
        vote_average,
        origin_country,
        origin_language,
        runtime,
        genres,
        keywords,
    }: MovieShowcaseProps) => {

    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W1280: string = import.meta.env.VITE_MOVIE_API_POSTER_W1280
    const posterUrl: string = backdrop_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W1280}${backdrop_path}` :
        "/default_movie_banner.svg"

    const formattedReleaseDateArray: string[] = new Date(release_date).toDateString().split(" ")
    const releasedYear: string = formattedReleaseDateArray[3]
    const releasedMonthAndDate: string = `${formattedReleaseDateArray[1]} ${formattedReleaseDateArray[2]}`

    const formattedRuntime: string = `${Math.floor(runtime / 60)}h ${runtime % 60}m`

    return (
        <section className="flex flex-col lg:flex-row gap-8 py-6 sm:py-10 relative">
            <div className="flex justify-center items-center w-full lg:w-5/9 h-full">
                <AspectRatio
                    ratio={9 / 16}
                    className="w-full h-full rounded-lg">
                    <img
                        src={posterUrl}
                        alt={`${title || "N/A"} movie poster`}
                        loading="lazy"
                        className="rounded-lg object-cover h-full brightness-60 hover:grayscale-0 hover:brightness-95 grayscale dark:brightness-40 dark:hover:brightness-90 transition-all duration-300"
                    />
                </AspectRatio>
            </div>
            <div className="flex flex-col items-center w-full gap-4">
                <div className="flex flex-col items-start justify-start gap-4 pb-4">
                    <h1 className="scroll-m-20 text-center self-center sm:self-start text-4xl font-extrabold tracking-tight text-balance sm:text-[min(10vw,70px)]">
                        {title}
                    </h1>
                    <h3 className="scroll-m-20 border-b pb-2 self-center sm:self-start text-lg sm:text-3xl font-semibold tracking-tight first:mt-0">
                        {releasedYear}
                    </h3>
                    <blockquote className="mt-0 mb-10 sm:mb-6 italic self-center sm:self-start">
                        &quot;{tagline || "N/A"}&quot;
                    </blockquote>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Overview</h4>
                    <p className="leading-7 not-first:mt-1 text-muted-foreground text-justify sm:text-start">
                        {overview}
                    </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-6 py-4">
                    <ItemGroup className="w-full grid grid-cols-2 md:grid-cols-5 gap-4">
                        <Item variant="outline">
                            <ItemHeader className="flex flex-row justify-center items-center h-12">
                                <Calendar size={18}/>
                            </ItemHeader>
                            <ItemContent className="text-center">
                                <ItemDescription>{releasedMonthAndDate}</ItemDescription>
                            </ItemContent>
                        </Item>
                        <Item variant="outline">
                            <ItemHeader className="flex flex-row justify-center items-center h-12">
                                <Star size={18}/>
                            </ItemHeader>
                            <ItemContent className="text-center">
                                <ItemDescription>{vote_average.toFixed(1)}</ItemDescription>
                            </ItemContent>
                        </Item>
                        <Item variant="outline">
                            <ItemHeader className="flex flex-row justify-center items-center h-12">
                                <Globe size={18} />
                            </ItemHeader>
                            <ItemContent className="text-center">
                                <ItemDescription>{origin_country[0] || "N/A"}</ItemDescription>
                            </ItemContent>
                        </Item>
                        <Item variant="outline">
                            <ItemHeader className="flex flex-row justify-center items-center h-12">
                                <Languages size={18}/>
                            </ItemHeader>
                            <ItemContent className="text-center">
                                <ItemDescription>{origin_language || "N/A"}</ItemDescription>
                            </ItemContent>
                        </Item>
                        <Item variant="outline" className="col-span-2 md:col-span-1">
                            <ItemHeader className="flex flex-row justify-center items-center h-12">
                                <Clapperboard size={18} />
                            </ItemHeader>
                            <ItemContent className="text-center">
                                <ItemDescription>{formattedRuntime}</ItemDescription>
                            </ItemContent>
                        </Item>
                    </ItemGroup>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Genres</h4>
                    <div className="flex flex-wrap justify-start gap-2">
                        {genres.length > 0 ? genres.map(genre => (
                            <Badge key={genre.id} variant="secondary">{genre.name}</Badge>
                        )) : (
                            <Badge variant="secondary">N/A</Badge>
                        )}
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Keywords</h4>
                    <div className="flex flex-wrap justify-start gap-2">
                        {keywords?.keywords?.length > 0 ? keywords?.keywords?.map(keyword => (
                            <Badge key={keyword.id} variant="secondary">{keyword.name}</Badge>
                        )) : (
                            <Badge variant="secondary">N/A</Badge>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieShowcase