import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Languages, Star} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";
import type {RecommendationCardProps} from "@/types/props/RecommendationCardProps.ts";

const RecommendationCard = ( { movie }: RecommendationCardProps ) => {
    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W500: string = import.meta.env.VITE_MOVIE_API_POSTER_W500
    const posterUrl: string = movie.poster_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W500}${movie.poster_path}` :
        "/default_movie_banner.svg"

    const releasedYear: string = movie.release_date ?
        new Date(movie?.release_date)
        .toDateString()
        .split(" ")[3] : "N/A"

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
                src={posterUrl}
                alt="Event cover"
                className="relative z-20 aspect-square w-full h-80 object-cover rounded-t-xl brightness-60 hover:grayscale-0 hover:brightness-95 grayscale dark:brightness-40 dark:hover:brightness-90"
            />
            <CardHeader>
                {releasedYear === String(new Date().getFullYear()) ? (
                    <CardAction>
                        <Badge variant="secondary">New</Badge>
                    </CardAction>
                ) : null}
                <CardTitle className="flex">
                    <span className="w-full sm:w-58 md:w-50 lg:w-50 truncate">{movie.title}</span>
                </CardTitle>
                <div className="flex flex-col justify-between gap-1 mt-2">
                    <div className="flex flex-row gap-2 items-center">
                        <Languages className="text-muted-foreground" size={15}/>
                        <CardDescription>{movie.original_language}</CardDescription>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Star className="text-muted-foreground" size={14}/>
                        <CardDescription>{movie.vote_average.toFixed(1)}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex flex-row justify-end">
                <p className="text-muted-foreground text-sm">{releasedYear}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full" asChild>
                    <Link to={`/movies/${movie.id}`}>View Details</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default RecommendationCard