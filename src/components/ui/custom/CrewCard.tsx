import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {ChartSpline} from "lucide-react";
import type {CrewCardProps} from "@/types/props/CrewCardProps.ts";
import type {GenderDefaultValues} from "@/types/GenderDefaultValues.ts";
import genderDefaultValues from "@/constants/genderDefaultValues.ts";

const CrewCard = ( { crewMember }: CrewCardProps ) => {
    const { female }: GenderDefaultValues = genderDefaultValues()

    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W1280: string = import.meta.env.VITE_MOVIE_API_POSTER_W1280
    const posterUrl: string = crewMember.profile_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W1280}${crewMember.profile_path}` :
        crewMember.gender === female ? "/default_female_banner.svg" : "/default_male_banner.svg"

    return (
        <Card className="relative w-full max-w-50 pt-0">
            <img
                src={posterUrl || "/test_banner.webp"}
                alt={crewMember.name || "N/A"}
                className="relative z-20 aspect-square h-60 w-full object-cover brightness-60 hover:grayscale-0 hover:brightness-95 grayscale dark:brightness-40 dark:hover:brightness-90 rounded-t-lg"
            />
            <CardHeader>
                <CardTitle className="flex flex-row">
                    <span className="w-full max-w-35 truncate">{crewMember.name || "N/A"}</span>
                </CardTitle>
                <CardDescription>
                    <p className="leading-7 text-muted-foreground text-justify sm:text-start">{crewMember.job}</p>
                    <p className="leading-7 text-muted-foreground text-justify sm:text-start text-xs mt-2">{crewMember.department} Dep.</p>
                    <div className="flex justify-end">
                        <Badge variant="secondary" className="flex gap-2">
                            <ChartSpline />
                            <p>{crewMember.popularity.toFixed(1)}</p>
                        </Badge>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default CrewCard