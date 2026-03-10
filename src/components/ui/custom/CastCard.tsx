import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Star} from "lucide-react";
import type {CastCardProps} from "@/types/props/CastCardProps.ts";
import genderDefaultValues from "@/constants/genderDefaultValues.ts";
import type {GenderDefaultValues} from "@/types/GenderDefaultValues.ts";

const CastCard = ( { castMember }: CastCardProps ) => {
    const { female }: GenderDefaultValues = genderDefaultValues()

    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W1280: string = import.meta.env.VITE_MOVIE_API_POSTER_W1280
    const posterUrl: string = castMember?.profile_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W1280}${castMember?.profile_path}` :
        castMember?.gender === female ? "/default_female_banner.svg" : "/default_male_banner.svg"

    return (
        <Card className="relative w-full max-w-50 pt-0 group">
            <img
                src={posterUrl}
                alt={castMember?.name || "N/A"}
                className="relative z-20 aspect-square h-55 w-full object-cover brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-40 dark:group-hover:brightness-90 transition-all duration-300 rounded-t-lg"
            />
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-1">
                    <span className="w-full max-w-35 truncate">{castMember?.name || "N/A"}</span>
                    <span className="text-muted-foreground text-sm">as</span>
                </CardTitle>
                <CardDescription>
                    <p className="leading-7 text-muted-foreground text-justify w-full max-w-35 truncate">{castMember?.character || "N/A"}</p>
                    <div className="flex justify-end">
                        <Badge variant="secondary" className="flex gap-2">
                            <Star />
                            <p>{castMember?.popularity.toFixed(1)}</p>
                        </Badge>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default CastCard