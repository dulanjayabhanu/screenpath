import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Languages, Star} from "lucide-react";
import {Link} from "react-router";
import type {MovieCardProps} from "@/types/props/MovieCardProps.ts";

const MovieCard = ({movie}: MovieCardProps) => {

    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W500: string = import.meta.env.VITE_MOVIE_API_POSTER_W500
    const posterUrl: string = movie.poster_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W500}${movie.poster_path}` :
        "/default_movie_banner.svg"

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
                src={posterUrl}
                alt={`${movie.title || "N/A"} movie poster`}
                className="relative z-20 aspect-video w-full h-85 object-cover rounded-t-xl brightness-60 hover:grayscale-0 hover:brightness-95 grayscale dark:brightness-40 dark:hover:brightness-90"
            />
            <CardHeader>
                {
                    parseInt(movie.release_date.split("-")[0]) === new Date().getFullYear() ? (
                        <CardAction>
                            <Badge variant="secondary">New</Badge>
                        </CardAction>
                    ) : null
                }
                <CardTitle className="flex h-10">
                    <span className="text-wrap">{movie.title}</span>
                </CardTitle>
                <div className="flex flex-col justify-between gap-1 mt-2">
                    <div className="flex flex-row gap-2 items-center">
                        <Languages className="text-muted-foreground" size={15}/>
                        <CardDescription>{movie.original_language || "N/A"}</CardDescription>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Star className="text-muted-foreground" size={14}/>
                        <CardDescription>{parseFloat(movie.vote_average.toFixed(1)) || "0.0"}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex flex-row justify-end">
                <p className="text-muted-foreground text-sm">{movie.release_date.split("-")[0] || "N/A"}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full cursor-default" asChild>
                    <Link to={`/movies/${movie.id}`}>View Details</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default MovieCard