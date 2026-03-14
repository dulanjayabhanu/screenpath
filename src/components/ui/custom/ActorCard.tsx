import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Star} from "lucide-react";
import type {GenderDefaultValues} from "@/types/GenderDefaultValues.ts";
import genderDefaultValues from "@/constants/genderDefaultValues.ts";
import type {ActorCardProps} from "@/types/props/ActorCardProps.ts";
import {useNavigate} from "react-router";

const ActorCard = ( { actor }: ActorCardProps ) => {
    const { female }: GenderDefaultValues = genderDefaultValues()

    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W1280: string = import.meta.env.VITE_MOVIE_API_POSTER_W1280
    const posterUrl: string = actor?.profile_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W1280}${actor?.profile_path}` :
        actor?.gender === female ? "/default_female_banner.svg" : "/default_male_banner.svg"

    const navigate = useNavigate()

    return (
        <Card className="relative w-full pt-0 group" onClick={() =>
            navigate(`/actor/${actor.id}`)
        }>
            <img
                src={posterUrl}
                alt={actor?.name || "N/A"}
                className="relative z-20 aspect-square h-75 w-full object-cover brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-40 dark:group-hover:brightness-90 transition-all duration-300 rounded-t-lg"
            />
            <CardHeader>
                <CardTitle className="flex flex-row justify-start items-baseline gap-1 overflow-x-hidden">
                    <span className="w-auto max-w-60 truncate">{actor?.name || "N/A"}</span>
                    <span className="max-w-30 truncate text-muted-foreground text-sm">known for</span>
                </CardTitle>
                <CardDescription className="overflow-x-hidden">
                    <p className="leading-7 text-muted-foreground text-justify w-full max-w-60 truncate">{actor?.known_for?.sort((a, b) =>
                        b.vote_count - a.vote_count
                    ).slice(
                        0, 5
                    ).map((actorMovie, index) => (
                        `${index !== 0 ? (`, `) : ""}${actorMovie.media_type === "movie" ? 
                            actorMovie.title : 
                            actorMovie.media_type === "tv" ? 
                                actorMovie.name : 
                                ""}`
                    )) || "N/A"}</p>
                    <div className="flex justify-end mt-2">
                        <Badge variant="secondary" className="flex gap-2">
                            <Star />
                            <p>{actor?.popularity.toFixed(1)}</p>
                        </Badge>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default ActorCard