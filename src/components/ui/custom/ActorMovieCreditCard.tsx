import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Languages, Star} from "lucide-react";
import type {ActorMovieCreditCardProps} from "@/types/props/ActorMovieCreditCardProps.ts";
import {useNavigate} from "react-router";

const ActorMovieCreditCard = (
    {
        actorMovie,
        language,
    }: ActorMovieCreditCardProps ) => {
    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W1280: string = import.meta.env.VITE_MOVIE_API_POSTER_W1280
    const MOVIE_API_POSTER_W500: string = import.meta.env.VITE_MOVIE_API_POSTER_W500

    const finalPosterUrl: string = actorMovie.poster_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W1280}${actorMovie.poster_path}` :
        "/default_movie_banner.svg"
    const finalCharacterUrl: string = actorMovie.backdrop_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W500}${actorMovie.backdrop_path}` :
        "/default_movie_banner.svg"

    const navigate = useNavigate()

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 group" onClick={() =>
            navigate(`/movies/${actorMovie.id}`)
        }>
            <img
                src={finalPosterUrl}
                alt={`${actorMovie.title || "Movie"} poster`}
                loading="lazy"
                className="relative z-20 aspect-square w-full h-80 object-cover rounded-t-xl brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-40 dark:group-hover:brightness-90 transition-all duration-300"
            />
            <CardHeader className="mt-1">
                <CardTitle className="flex h-8">
                    <span className="text-wrap">{actorMovie.title || "N/A"}</span>
                </CardTitle>
                <div className="flex flex-row gap-2 pt-1">
                    <img
                        src={finalCharacterUrl}
                        alt={`${actorMovie.title || "Movie"} backdrop poster`}
                        loading="lazy"
                        className="object-cover aspect-square h-12 rounded-md border brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-40 dark:group-hover:brightness-90 transition-all duration-300" />
                    <div className="w-full flex flex-col gap-1 overflow-x-hidden">
                        <h4 className="text-sm">Character</h4>
                        <span className="text-muted-foreground text-sm font-medium truncate w-full max-w-40">{actorMovie.character}</span>
                    </div>
                </div>
                {new Date(actorMovie.release_date).getFullYear() === new Date().getFullYear() ? (
                    <CardAction>
                        <Badge variant="secondary">New</Badge>
                    </CardAction>
                ) : new Date(actorMovie.release_date).getFullYear() > new Date().getFullYear() ? (
                    <CardAction>
                        <Badge variant="default">Upcoming</Badge>
                    </CardAction>
                ) : null}
            </CardHeader>
            <CardContent>
                <div className="w-full flex flex-row justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <div className="flex flex-row gap-2 items-center">
                            <Languages className="text-muted-foreground" size={15}/>
                            <CardDescription>{language?.english_name || "N/A"}</CardDescription>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Star className="text-muted-foreground" size={14}/>
                            <CardDescription>{actorMovie.vote_average.toFixed(1)}</CardDescription>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-end items-end">
                        <CardContent className="flex flex-row justify-end p-0 m-0">
                            <p className="text-muted-foreground text-sm font-medium">{new Date(actorMovie.release_date).getFullYear() || "N/A"}</p>
                        </CardContent>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ActorMovieCreditCard