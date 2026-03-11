import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction, CardContent,
    CardDescription,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"
import {Languages, Star} from "lucide-react";
import {useNavigate} from "react-router";
import type {MovieCardProps} from "@/types/props/MovieCardProps.ts";

const MovieCard = (
    {
        movie,
        language,
    }: MovieCardProps) => {
    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W500: string = import.meta.env.VITE_MOVIE_API_POSTER_W500
    const posterUrl: string = movie.poster_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W500}${movie.poster_path}` :
        "/default_movie_banner.svg"

    const navigate = useNavigate()

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 group gap-1" onClick={() =>
            navigate(`/movies/${movie.id}`)
        }>
            <img
                src={posterUrl}
                alt={`${movie.title || "N/A"} movie poster`}
                loading="lazy"
                className="relative z-20 aspect-video w-full h-85 object-cover rounded-t-xl brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-50 dark:group-hover:brightness-90 transition-all duration-300"
            />
            <CardHeader className="mt-4">
                <CardTitle className="flex h-10">
                    <span className="text-wrap">{movie.title}</span>
                </CardTitle>
                {
                    parseInt(movie.release_date.split("-")[0]) === new Date().getFullYear() ? (
                        <CardAction>
                            <Badge variant="secondary">New</Badge>
                        </CardAction>
                    ) : parseInt(movie.release_date.split("-")[0]) > new Date().getFullYear() ? (
                        <CardAction>
                            <Badge variant="default">Upcoming</Badge>
                        </CardAction>
                    ) : null
                }
            </CardHeader>
            <CardContent>
                <div className="w-full flex flex-row justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <div className="flex flex-row gap-2 items-center">
                            <Languages className="text-muted-foreground" size={15}/>
                            <CardDescription>{language ?
                                language.english_name :
                                movie.original_language ?
                                    movie.original_language :
                                    "N/A"}</CardDescription>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Star className="text-muted-foreground" size={14}/>
                            <CardDescription>{parseFloat(movie.vote_average.toFixed(1)) || "0.0"}</CardDescription>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-end items-end">
                        <CardContent className="flex flex-row justify-end p-0 m-0">
                            <p className="text-muted-foreground text-sm font-medium">{movie.release_date.split("-")[0] || "N/A"}</p>
                        </CardContent>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default MovieCard